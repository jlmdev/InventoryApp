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
    // All of these routes will be at the base URL:     /api/NetworkDevices
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case NetworkDevicesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class NetworkDevicesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public NetworkDevicesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/NetworkDevices
        //
        // Returns a list of all your NetworkDevices
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NetworkDevice>>> GetNetworkDevices(string filter)
        {
            if (filter == null)
            {
                // Uses the database context in `_context` to request all of the NetworkDevices, sort
                // them by row id and return them as a JSON array.
                return await _context.NetworkDevices.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.NetworkDevices.Where(networkDevice => networkDevice.Name.ToLower().Contains(filter.ToLower())).OrderBy(row => row.Id).ToListAsync();
            }
        }

        // GET: api/NetworkDevices/5
        //
        // Fetches and returns a specific networkDevice by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<NetworkDevice>> GetNetworkDevice(int id)
        {
            // Find the networkDevice in the database using `FindAsync` to look it up by id
            var networkDevice = await _context.NetworkDevices.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (networkDevice == null)
            {
                // Return a `404` response to the client indicating we could not find a networkDevice with this id
                return NotFound();
            }

            //  Return the networkDevice as a JSON object.
            return networkDevice;
        }

        // PUT: api/NetworkDevices/5
        //
        // Update an individual networkDevice with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a NetworkDevice
        // variable named networkDevice. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our NetworkDevice POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNetworkDevice(int id, NetworkDevice networkDevice)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != networkDevice.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in networkDevice to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from networkDevice
            _context.Entry(networkDevice).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!NetworkDeviceExists(id))
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
            // return Ok(networkDevice)
            //
            return NoContent();
        }

        // POST: api/NetworkDevices
        //
        // Creates a new networkDevice in the database.
        //
        // The `body` of the request is parsed and then made available to us as a NetworkDevice
        // variable named networkDevice. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our NetworkDevice POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<NetworkDevice>> PostNetworkDevice(NetworkDevice networkDevice)
        {
            // Indicate to the database context we want to add this new record
            _context.NetworkDevices.Add(networkDevice);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetNetworkDevice", new { id = networkDevice.Id }, networkDevice);
        }

        // DELETE: api/NetworkDevices/5
        //
        // Deletes an individual networkDevice with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNetworkDevice(int id)
        {
            // Find this networkDevice by looking for the specific id
            var networkDevice = await _context.NetworkDevices.FindAsync(id);
            if (networkDevice == null)
            {
                // There wasn't a networkDevice with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.NetworkDevices.Remove(networkDevice);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(networkDevice)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing networkDevice by the supplied id
        private bool NetworkDeviceExists(int id)
        {
            return _context.NetworkDevices.Any(networkDevice => networkDevice.Id == id);
        }
    }
}
