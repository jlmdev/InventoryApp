import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function Workstations() {
  const [workstations, setWorkstations] = useState([])
  const [filterText, setFilterText] = useState('')

  // applies filter to list if search bar is changed
  useEffect(
    function () {
      async function loadWorkstations() {
        const url =
          filterText.length === 0
            ? `/api/Workstations`
            : `/api/Workstations?filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setWorkstations(json)
      }
      loadWorkstations()
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
              Workstations
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

        {/* Shows Create Workstation button if user is authenticated */}
        {
          isLoggedIn() &&
          <Link to="/create-workstation">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Create New Workstation
            </button>
          </Link>
        }

        {/* Populates the list of workstations from the workstations table */}
        {workstations.map((workstation) => (
          <Link key={workstation.id} to={`/workstations/${workstation.id}`}>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              {workstation.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}
