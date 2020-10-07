import React from 'react'
import { Link } from 'react-router-dom'

export function Workstations() {
  return (
    <>
      {/* Breadcrumb code */}
      {/* <div>
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
      </div> */}
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
          />
        </div>
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
