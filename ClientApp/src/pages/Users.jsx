import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function Users() {
  const [users, setUsers] = useState([])
  const [filterText, setFilterText] = useState('')

  // applies filter to list if search bar is changed
  useEffect(
    function () {
      async function loadUsers() {
        const url =
          filterText.length === 0
            ? `/api/Users`
            : `/api/Users/filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setUsers(json)
      }
      loadUsers()
    },
    [filterText]
  )

  return (
    <>    
      <div>
        {/* Breadcrumb Navigation Bar */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Users
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
      {/* Shows Create User button if user is authenticated */}
      {
        isLoggedIn() &&
        <Link to="/create-user">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Create New User
          </button>
        </Link>
      }
      {/* Populates the list of users from the Users table */}
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            {user.fullName}
          </button>
        </Link>
      ))}
      </div>     
    </>
  )
}
