import React from 'react'

export function SingleUser() {
  return (
    <>
      <div className="scroll-container">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Users</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Single User
              </li>
            </ol>
          </nav>
        </div>
        <div className="button-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                First
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="First"
              aria-label="First"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Last
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Last"
              aria-label="Last"
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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Role
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Role"
              aria-label="Role"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Password
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
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
      </div>
    </>
  )
}
