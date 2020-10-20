import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getUserId, isLoggedIn } from '../Auth'

export function CreateUser() {

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const [errorMessage, setErrorMessage] = useState()

  const history = useHistory()

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })

    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')
      setErrorMessage(message)
    } else {
      history.push('/users')
    }
  }

  function handleCancelButton(event) {
    history.push('/users')
  }
  
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <div className="button-group">
          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Full Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
              value={newUser.fullName}
              name="fullName"
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
              value={newUser.email}
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
              value={newUser.password}
              name="password"
              onChange={handleFormFieldChange}
            />
          </div>
          {
            isLoggedIn() && getUserId() === 1 &&
            <button type="submit" className="btn btn-success btn-lg btn-block response-button" onClick={handleFormSubmit}>
              Save Changes
            </button>
          }   
          <button type="button" className="btn btn-danger btn-lg btn-block response-button" onClick={handleCancelButton}>
            Cancel
          </button>
        </div>
      
      </form>
    </>
  )
}
