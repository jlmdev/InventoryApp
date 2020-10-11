using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventoryApp.Models;

namespace InventoryApp.Controllers
{
    // All of these routes will be at the base URL:     /api/Servers
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case ServersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class ServersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ServersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Servers
        //
        // Returns a list of all your Servers
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Server>>> GetServers(string filter)
        {
            if (filter == null)
            {
                // Uses the database context in `_context` to request all of the Servers, sort
                // them by row id and return them as a JSON array.
                return await _context.Servers.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.Servers.Where(server => server.Name.ToLower().Contains(filter.ToLower())).OrderBy(row => row.Id).ToListAsync();
            }
        }

        // GET: api/Servers/5
        //
        // Fetches and returns a specific server by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Server>> GetServer(int id)
        {
            // Find the server in the database using `FindAsync` to look it up by id
            var server = await _context.Servers.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (server == null)
            {
                // Return a `404` response to the client indicating we could not find a server with this id
                return NotFound();
            }

            //  Return the server as a JSON object.
            return server;
        }

        // PUT: api/Servers/5
        //
        // Update an individual server with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Server
        // variable named server. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Server POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServer(int id, Server server)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != server.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in server to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from server
            _context.Entry(server).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ServerExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            // return Ok(server)
            //
            return NoContent();
        }

        // POST: api/Servers
        //
        // Creates a new server in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Server
        // variable named server. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Server POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Server>> PostServer(Server server)
        {
            // Indicate to the database context we want to add this new record
            _context.Servers.Add(server);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetServer", new { id = server.Id }, server);
        }

        // DELETE: api/Servers/5
        //
        // Deletes an individual server with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServer(int id)
        {
            // Find this server by looking for the specific id
            var server = await _context.Servers.FindAsync(id);
            if (server == null)
            {
                // There wasn't a server with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Servers.Remove(server);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(server)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing server by the supplied id
        private bool ServerExists(int id)
        {
            return _context.Servers.Any(server => server.Id == id);
        }
    }
}
