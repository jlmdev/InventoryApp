import React from 'react'

export function DeviceUsers() {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Device Users
            </li>
          </ol>
        </nav>
      </div>
      <div className="button-group">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Search
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Create New User
        </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block">
          Device User
        </button>
      </div>
    </>
  )
}
