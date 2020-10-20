import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function Locations() {

  const [locations, setLocations] = useState([])
  const [filterText, setFilterText] = useState('')

  // applies filter to list if search bar is changed 
  useEffect(
    function () {
      async function loadLocations() {
        const url = 
          filterText.length === 0
            ? `/api/Locations`
            : `/api/Locations?filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setLocations(json)
      }
      loadLocations()
    },
    [filterText]
  )

  return (
    <>
      <div>
        {/* Breadcrumb Navigation bar */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Locations
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
        {/* Shows Create Location button if user is authenticated */}
        {
          isLoggedIn() &&
          <Link to="/create-location">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Create New Location
            </button>
          </Link>
        }
        {/* Populates the list of locations from the Locations table */}
        {locations.map((location) => (
          <Link key={location.id} to={`/locations/${location.id}`}>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              {location.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}
