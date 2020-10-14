import React from 'react'
import { Link, Redirect, Route } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <Link to="/workstations">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Workstations
          </button>
        </Link>
        <Link to="/servers">
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Servers
          </button>
        </Link>
        <Link to="/network-devices">
          <button type="button" className="btn btn-success btn-lg btn-block">
            Network
          </button>
        </Link>
        {/* <Link to="/device-users">
          <button type="button" className="btn btn-danger btn-lg btn-block">
            Device Users
          </button>
        </Link> */}
        <Link to="/locations">
          <button type="button" className="btn btn-warning btn-lg btn-block">
            Locations
          </button>
        </Link>
        {/* <Link to="/users">
          <button type="button" className="btn btn-info btn-lg btn-block">
            Users
          </button>
        </Link> */}
      </div>
    </>
  )
}
