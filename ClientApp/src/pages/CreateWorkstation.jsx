import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export function CreateWorkstation() {
  const today = new Date().toISOString().substr(0, 10)

  const [locations, setLocations] = useState([])

  // New Workstation State
  const [newWorkstation, setNewWorkstation] = useState({
    name: '',
    serial: '',
    dateAcquired: today,
    description: '',
    processor: '',
    os: '',
    lastUpdate: today,
    type: '',
    locationId: '',
  })

  // Loads Locations from Locations table
  useEffect(
    function () {
      async function loadLocations() {
        const url = `/api/Locations`
        const response = await fetch(url)
        const json = await response.json()
        setLocations(json)
      }
      loadLocations()
    },
    []
  )

  // Error Message State
  const [errorMessage, seterrorMessage] = useState()

  // allows redirect
  const history = useHistory()

  // Updates New Workstation State when non numeric fields are changed
  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedWorkstation = { ...newWorkstation, [fieldName]: value }

    setNewWorkstation(updatedWorkstation)
  }

  // Updates New Workstation State when numeric fields are changed
  function handleNumericFormFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name
    const updatedWorkstation = { ...newWorkstation, [fieldName]: value }
    setNewWorkstation(updatedWorkstation)
  }

  // POSTs the new workstation and redirects to workstations page or returns errors
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Workstations', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newWorkstation),
    })

    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')
      seterrorMessage(message)
    } else {
      history.push('/workstations')
    }
  }

  // redirects to main workstations page
  function handleCancelButton(event) {
    history.push('/workstations')
  }

  return (
    <>
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
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              value={newWorkstation.name}
              name="name"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Serial Number
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Serial Number"
              aria-label="Serial Number"
              aria-describedby="basic-addon1"
              value={newWorkstation.serial}
              name="serial"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Date Acquired
              </span>
            </div>
            <input
              type="date"
              className="form-control"
              placeholder="Date Acquired"
              aria-label="Date Acquired"
              aria-describedby="basic-addon1"
              value={newWorkstation.dateAcquired}
              name="dateAcquired"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Type
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Type"
              aria-label="Type"
              aria-describedby="basic-addon1"
              value={newWorkstation.type}
              name="type"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                OS
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="OS"
              aria-label="OS"
              aria-describedby="basic-addon1"
              value={newWorkstation.os}
              name="os"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Processor
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Processor"
              aria-label="Processor"
              aria-describedby="basic-addon1"
              value={newWorkstation.processor}
              name="processor"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Last updated
              </span>
            </div>
            <input
              type="date"
              className="form-control"
              placeholder="Last updated"
              aria-label="Last updated"
              aria-describedby="basic-addon1"
              value={newWorkstation.lastUpdate}
              name="lastUpdate"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Description
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon1"
              value={newWorkstation.description}
              name="description"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" name="locationId" value={newWorkstation.locationId} onChange={handleNumericFormFieldChange}>
            {
                locations.map((location) => (
                  <option value={location.id} key={location.id}>
                    {location.name}
                  </option>
                ))
              }
              
            </select>
          </div>

          <button type="submit" className="btn btn-success btn-lg btn-block response-button">
            Save Changes
          </button>
          
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block response-button"
            onClick={handleCancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
