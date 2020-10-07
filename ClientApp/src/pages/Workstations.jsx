import React from 'react'
import { Link } from 'react-router-dom'

export function Workstations() {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Workstations
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <Link to="/workstations/single-workstation">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Search
          </button>
        </Link>
        <Link to="/workstations/single-workstation">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Workstation
          </button>
        </Link>
        <Link to="/workstations/single-workstation">
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Workstation
          </button>
        </Link>
      </div>
    </>
  )
}