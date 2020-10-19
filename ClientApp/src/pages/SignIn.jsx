import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { recordAuthentication } from '../Auth'

export function SignIn() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [errorMessage, setErrorMessage] = useState()

  const history = useHistory()

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (response.status === 400) {
      const message = Object.values(apiResponse.errors).join(' ')
      setErrorMessage(message)
    } else {
      recordAuthentication(apiResponse)
      window.location.assign('/')
    }
  }

  function handleCancelButton(event) {
    history.push('/sign-in')
  }
  
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <div className="button-group">
          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
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

          <button type="submit" className="btn btn-success btn-lg btn-block" onClick={handleFormSubmit}>
            Submit
          </button>
          <button type="button" className="btn btn-danger btn-lg btn-block" onClick={handleCancelButton}>
            Cancel
          </button>
        </div>
      
      </form>
    </>
  )
}
