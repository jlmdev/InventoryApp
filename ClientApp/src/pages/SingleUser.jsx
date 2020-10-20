import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { authHeader, getUser, updateUserAuth, isLoggedIn, getUserId } from '../Auth'

export function SingleUser() {

  const [user, setUser] = useState({
    
    fullName: '',
    email: '',
    password: ''
  })

  const params = useParams()
  const id = params.id

  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/Users/${id}`)
      const apiData = await response.json() 
      
      setUser(apiData)
    }
    fetchUser()
  }, [id])

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Users/${user.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      const message = Object.values(apiResponse.errors).join(' ')
      setErrorMessage(message)
    } else {
      updateUserAuth(apiResponse)
      window.location.assign('/users')
    }
  }

  // handle deletion
  async function handleDeleteUser(event) {
    event.preventDefault()

    if (window.confirm('Are you sure you want to delete this?')) {
      const response = await fetch(`/api/Users/${id}`, {
        method: 'DELETE',
      })
    }
  }
    
  

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/users">Users</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Single User
          </li>
        </ol>
      </nav>
      <form onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <div className="button-group">
          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={user.fullName}
              name="fullName"
              aria-label="First"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              value={user.email}
              name="email"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Password
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={user.password}
              name="password"
              onChange={handleFormFieldChange}
            />
          </div>
          
          {
            isLoggedIn() &&
            <button type="submit" className="btn btn-success btn-lg btn-block response-button">
              Save Changes
            </button>
          }
          {
            isLoggedIn() && getUserId() === 1 &&
            <button type="button" className="btn btn-danger btn-lg btn-block response-button delete">
              Delete
            </button>
          }
          </div>
      </form>
    </>
  )
}
