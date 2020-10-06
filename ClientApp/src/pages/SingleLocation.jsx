import React from 'react'

export function SingleLocation() {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Locations</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single Location
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Street 1
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Street 1"
            aria-label="Street 1"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Street 2
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Street 2"
            aria-label="Street 2"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              City
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-label="City"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              State
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="State"
            aria-label="State"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              ZIP
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="ZIP"
            aria-label="ZIP"
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
