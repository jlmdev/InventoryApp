import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function CreateLocation() {

  const [newLocation, setNewLocation] = useState({
    name: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
  })

  const [errorMessage, seterrorMessage] = useState()

  const history = useHistory()

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedLocation = { ...newLocation, [fieldName]: value }

    setNewLocation(updatedLocation)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Locations', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newLocation),
    })

    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')
      seterrorMessage(message)
    } else {
      history.push('/locations')
    }
  }

  function handleCancelButton(event) {
    history.push('/locations')
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
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
              value={newLocation.name}
              name="name"
              onChange={handleFormFieldChange}
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
              value={newLocation.street1}
              name="street1"
              onChange={handleFormFieldChange}
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
              value={newLocation.street2}
              name="street2"
              onChange={handleFormFieldChange}
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
              value={newLocation.city}
              name="city"
              onChange={handleFormFieldChange}
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
              value={newLocation.state}
              name="state"
              onChange={handleFormFieldChange}
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
              value={newLocation.zip}
              name="zip"
              onChange={handleFormFieldChange}
            />
          </div>
  
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block"
            onClick={handleCancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}