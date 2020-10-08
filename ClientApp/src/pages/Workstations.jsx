import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Workstations() {
  const [workstations, setWorkstations] = useState([])

  useEffect(async function () {
    const response = await fetch('/api/workstations')
    const json = await response.json()
    setWorkstations(json)
  }, [])

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
        <Link to="workstations">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Workstation
          </button>
        </Link>

        {workstations.map((workstation) => (
          <Link to={`/workstations/${workstation.id}`}>
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
