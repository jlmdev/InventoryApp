import React from 'react'
import { Link } from 'react-router-dom'

export function NetworkDevices() {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Network Devices
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <Link to="/network-devices/single-network-device">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Search
          </button>
        </Link>
        <Link to="/network-devices/single-network-device">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New Network Device
          </button>
        </Link>
        <Link to="/network-devices/single-network-device">
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Network Device
          </button>
        </Link>
      </div>
    </>
  )
}
