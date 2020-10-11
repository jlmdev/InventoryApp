import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Servers() {
  const [servers, setServers] = useState([])
  const [filterText, setFilterText] = useState('')

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
        <Link to="/create-server">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Server
          </button>
        </Link>
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
