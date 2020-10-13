import React, { useState } from 'react'

export function Locations() {

  const [locations, setLocations] = useState([])
  const [filterText, setFilterText] = useState('')

  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Locations
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Search
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Create New Location
        </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block">
          Location
        </button>
      </div>
    </>
  )
}
