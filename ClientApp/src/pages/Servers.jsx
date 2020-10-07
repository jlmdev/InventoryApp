import React from 'react'
import { Link } from 'react-router-dom'

export function Servers() {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Servers
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <Link to="/servers/single-server">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Search
          </button>
        </Link>
        <Link to="/servers/single-server">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Server
          </button>
        </Link>
        <Link to="/servers/single-server">
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Server
          </button>
        </Link>
      </div>
    </>
  )
}
