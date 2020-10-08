import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Workstations() {
  const [workstations, setWorkstations] = useState([
    {
      id: 2,
      name: 'Desktop 1',
      serial: '12345',
      dateAcquired: '2015-06-30T00:00:00',
      description: 'Conference Room Desktop',
      processor: 'i7',
      os: 'Windows 10',
      active: true,
      lastUpdate: '2020-09-15T00:00:00',
      type: 'Desktop',
    },
    {
      id: 3,
      name: 'Desktop 2',
      serial: '23456ERTY',
      dateAcquired: '2018-07-15T00:00:00',
      description: 'James Desktop',
      processor: 'i5',
      os: 'Windows 10',
      active: true,
      lastUpdate: '2020-09-15T00:00:00',
      type: 'Desktop',
    },
    {
      id: 4,
      name: 'Desktop 3',
      serial: '3457rtydfh',
      dateAcquired: '2019-09-10T00:00:00',
      description: 'Alice Desktop',
      processor: 'i3',
      os: 'Windows 10',
      active: false,
      lastUpdate: '2019-08-15T00:00:00',
      type: 'Desktop',
    },
    {
      id: 5,
      name: 'Laptop 1',
      serial: '224356734',
      dateAcquired: '2020-07-13T00:00:00',
      description: 'Nathan Laptop',
      processor: 'i7',
      os: 'Windows 10',
      active: true,
      lastUpdate: '2020-09-15T00:00:00',
      type: 'Laptop',
    },
    {
      id: 6,
      name: 'Laptop 2',
      serial: '45i825gsd',
      dateAcquired: '2017-12-10T00:00:00',
      description: 'Josh Mac',
      processor: 'i7',
      os: 'MacOS',
      active: true,
      lastUpdate: '2020-09-15T00:00:00',
      type: 'Laptop',
    },
    {
      id: 7,
      name: 'Laptop 3',
      serial: '347sdh',
      dateAcquired: '2019-05-16T00:00:00',
      description: 'Samantha Laptop',
      processor: 'i3',
      os: 'Windows 10',
      active: true,
      lastUpdate: '2020-03-15T00:00:00',
      type: 'Laptop',
    },
    {
      id: 8,
      name: 'Desktop 4',
      serial: '2457xcvn',
      dateAcquired: '2018-01-20T00:00:00',
      description: 'Jennifer Desktop',
      processor: 'i7',
      os: 'Windows 10',
      active: true,
      lastUpdate: '2020-09-15T00:00:00',
      type: 'Desktop',
    },
    {
      id: 9,
      name: 'Desktop 5',
      serial: '87645hjkl',
      dateAcquired: '2020-10-11T00:00:00',
      description: 'Lauren Desktop',
      processor: 'i5',
      os: 'Windows 10',
      active: true,
      lastUpdate: '2020-09-15T00:00:00',
      type: 'Desktop',
    },
  ])

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

        {workstations.map((workstation) => (
          <Link to="/workstations/single-workstation">
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
