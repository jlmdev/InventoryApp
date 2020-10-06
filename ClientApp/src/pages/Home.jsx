import React from 'react'

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
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Workstations
        </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block">
          Servers
        </button>
        <button type="button" className="btn btn-success btn-lg btn-block">
          Network
        </button>
        <button type="button" className="btn btn-danger btn-lg btn-block">
          Device Users
        </button>
        <button type="button" className="btn btn-warning btn-lg btn-block">
          Locations
        </button>
        <button type="button" className="btn btn-info btn-lg btn-block">
          Users
        </button>
      </div>
    </>
  )
}
