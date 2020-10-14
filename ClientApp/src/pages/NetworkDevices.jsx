import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function NetworkDevices() {
  const [networkDevices, setNetworkDevices] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(
    function () {
      async function loadNetworkDevices() {
        const url =
          filterText.length === 0
            ? `/api/NetworkDevices`
            : `/api/NetworkDevices?filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setNetworkDevices(json)
      }
      loadNetworkDevices()
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
              Network Devices
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
        <Link to="/create-network-device">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Network Device
          </button>
        </Link>
        {networkDevices.map((networkDevice) => (
          <Link key={networkDevice.id} to={`/network-devices/${networkDevice.id}`}>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              {networkDevice.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}
