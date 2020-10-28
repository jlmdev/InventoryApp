import React from 'react'
import { Link } from 'react-router-dom'
import { getUserId, isLoggedIn, logout } from '../Auth'


export function Home() {

  // Handles logout function
  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
      </div>

      <div className="button-group">
        
        <Link to="/workstations">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Workstations
          </button>
        </Link>
        <Link to="/servers">
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Servers
          </button>
        </Link>
        <Link to="/network-devices">
          <button type="button" className="btn btn-success btn-lg btn-block">
            Network
          </button>
        </Link>
        <Link to="/locations">
          <button type="button" className="btn btn-warning btn-lg btn-block">
            Locations
          </button>
        </Link>
        {/* The buttons below require authentication to populate */}
        {
          isLoggedIn() && getUserId() === 1 &&
          <Link to="/users">
            <button type="button" className="btn btn-info btn-lg btn-block">
              Users
            </button>
          </Link>
        }
        {
          isLoggedIn() && 
          <Link to="/">
          <button type="button" className="btn btn-danger btn-lg btn-block sign-out" onClick={handleLogout}>
            Sign Out
          </button>
          </Link>
        }
      </div>
    </>
  )
}
