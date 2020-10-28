import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Disabled for Demo mode
// import { isLoggedIn } from '../Auth'

export function Servers() {
  const [servers, setServers] = useState([])
  const [filterText, setFilterText] = useState('')
  
  // applies filter to list if search bar is changed
  useEffect(
    function () {
      async function loadServers() {
        const url =
          filterText.length === 0
            ? `/api/Servers`
            : `/api/Servers?filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setServers(json)
      }
      loadServers()
    },
    [filterText]
  )

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Servers
            </li>
          </ol>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="button-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Search
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Term"
            aria-label="Search Term"
            aria-describedby="basic-addon1"
            value={filterText}
            onChange={function (event) {
              setFilterText(event.target.value)
            }}
          />
        </div>

        {/* Shows Create Server button if user is authenticated */}
        {/* {
          isLoggedIn() &&
          <Link to="/create-server">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Create New Server
            </button>
          </Link>
        } */}

        {/* Demo mode allows creating servers without signing in */}
        <Link to="/create-server">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Server
          </button>
        </Link>

        {/* Populates the list of servers from the servers table */}
        {servers.map((server) => (
          <Link key={server.id} to={`/servers/${server.id}`}>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              {server.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}
