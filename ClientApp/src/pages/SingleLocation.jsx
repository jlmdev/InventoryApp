import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function SingleLocation() {

  // Initialize and store location data
  const [location, setLocation] = useState({
    name: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
  })

  // Extract id parameter from url
  const params = useParams()
  const id = params.id

  // Hook for relocation
  const history = useHistory()

  // Pass error messages from Controller if present
  const [errorMessage, setErrorMessage] = useState()


  // Loads Location Data by id
  useEffect(() => {
    async function fetchLocation() {
      const response = await fetch(`/api/Locations/${id}`)
      const apiData = await response.json()

      setLocation(apiData)
    }

    fetchLocation()
  }, [id])

  // Updates Location State when fields are changed
  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedLocation = { ...location, [fieldName]: value }

    setLocation(updatedLocation)
  }

  // PUTs the updated information to the database
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Locations/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(location),
    })
  }

  // Deletes the location
  async function handleDeleteLocation(event) {
    event.preventDefault()

    if (window.confirm('Are you sure you want to delete this?')) {
      const response = await fetch(`/api/Locations/${id}`, {
        method: 'DELETE',
      })
    }
  }

  return (
    <>
        {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/locations">Locations</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Single Location
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
              value={location.name}
              name="name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Street 1
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={location.street1}
              name="street1"
              aria-label="Street 1"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Street 2
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={location.street2}
              name="street2"
              aria-label="Street 2"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                City
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={location.city}
              name="city"
              aria-label="City"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                State
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={location.state}
              name="state"
              aria-label="State"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                ZIP
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={location.zip}
              name="zip"
              aria-label="ZIP"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          {/* In main mode, requires login to make changes */}
          {/* {
            isLoggedIn() &&
            <button 
              type="submit" 
              className="btn btn-success btn-lg btn-block response-button">
              Save Changes
            </button>
          } */}

          {/* Allow non signed in users to make changes for demo mode */}
          <button 
            type="submit" 
            className="btn btn-success btn-lg btn-block response-button">
            Save Changes
          </button>

          {
            isLoggedIn() &&
            <button 
              type="button" 
              className="btn btn-danger btn-lg btn-block delete response-button" 
              onClick={handleDeleteLocation}>
              Delete
            </button>
          }
        </div>
      </form>
    </>
  )
}
