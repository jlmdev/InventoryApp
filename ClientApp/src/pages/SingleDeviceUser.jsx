import React from 'react'
// Maintaining inactive code for future development
// import {Link} from 'react-router-dom'

export function SingleDeviceUser() {
  return (
    <>
      <div>
        {/* <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Workstations</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single Workstation
            </li>
          </ol>
        </nav> */}
      </div>
      <div className="button-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              First Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="First Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Last Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Active
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Active"
            aria-label="Active"
            aria-describedby="basic-addon1"
          />
        </div>

        <button type="button" className="btn btn-success btn-lg btn-block">
          Save Changes
        </button>
        <button type="button" className="btn btn-danger btn-lg btn-block">
          Delete
        </button>
      </div>
    </>
  )
}
