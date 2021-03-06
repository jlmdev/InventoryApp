import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function SingleWorkstation() {

  // Workstation State
  const [workstation, setWorkstation] = useState({
    name: '',
    serial: '',
    dateAcquired: '',
    description: '',
    processor: '',
    os: '',
    lastUpdate: '',
    type: '',
    locationId: ''
  })

  // Location State
  const [locations, setLocations] = useState([])

  const params = useParams()
  const id = params.id

  // Maintaining for future development
  // const history = useHistory()
  // const [errorMessage, setErrorMessage] = useState()

  // Loads Workstation Data
  useEffect(() => {
    const fetchWorkstation = () => {
      fetch(`/api/Workstations/${id}`)
        .then((response) => response.json())
        .then((apiData) => {
          apiData.dateAcquired = apiData.dateAcquired.substr(0, 10)
          apiData.lastUpdate = apiData.lastUpdate.substr(0, 10)
          setWorkstation(apiData)
        })
    }
    fetchWorkstation()
  }, [id])

  // Loads Location Data
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

  // Updates Workstation State when non numeric fields are changed
  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedWorkstation = { ...workstation, [fieldName]: value }

    setWorkstation(updatedWorkstation)
  }

  // Updates Workstation State when numeric fields are changed
  function handleNumericFormFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name
    const updatedWorkstation = { ...workstation, [fieldName]: value }
    setWorkstation(updatedWorkstation)
  }

  // PUTs the updated information to the database
  async function handleFormSubmit(event) {
    event.preventDefault()

    await fetch(`/api/Workstations/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(workstation),
    })
  }

  // DELETEs the workstation
  async function handleDeleteWorkstation(event) {
    event.preventDefault()

    if (window.confirm('Are you sure you want to delete this?')) {
      await fetch(`/api/Workstations/${id}`, {
        method: 'DELETE',
      })
    }
  }

  // test for location selection
  // console.log(workstation.locationId)
  return (
    <>
    {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/workstations">Workstations</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {workstation.name}
          </li>
        </ol>
      </nav>

      <form onSubmit={handleFormSubmit}>
        {/* Maintaining for future development */}
        {/* {errorMessage && <p>{errorMessage}</p>} */}
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
              value={workstation.name}
              name="name"
              aria-label="Name"
              aria-describedby="basic-addon1"
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
              value={workstation.serial}
              name="serial"
              aria-label="Serial Number"
              aria-describedby="basic-addon1"
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
              value={workstation.dateAcquired}
              name="dateAcquired"
              aria-label="Date Acquired"
              aria-describedby="basic-addon1"
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
              value={workstation.type}
              name="type"
              aria-label="Type"
              aria-describedby="basic-addon1"
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
              value={workstation.os}
              name="os"
              aria-label="OS"
              aria-describedby="basic-addon1"
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
              value={workstation.processor}
              name="processor"
              aria-label="Processor"
              aria-describedby="basic-addon1"
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
              value={workstation.lastUpdate}
              name="lastUpdate"
              aria-label="Last updated"
              aria-describedby="basic-addon1"
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
              value={workstation.description}
              name="description"
              aria-label="Description"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Location</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" name="locationId" value={workstation.locationId} onChange={handleNumericFormFieldChange}>
            {
                locations.map((location) => (
                  <option value={location.id} key={location.id}>
                    {location.name}
                  </option>
                ))
              }
              
            </select>
          </div>
          
          {/* In main mode, requires login to make changes */}
          {/* {
            isLoggedIn() &&    
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block response-button"
            >
              Save Changes
            </button>
          } */}

            {/* Allow non signed in users to make changes for demo mode */}
            <button   
              type="submit"
              className="btn btn-success btn-lg btn-block response-button"
            >
              Save Changes
            </button>

          {
            isLoggedIn() &&
            <button
              type="button"
              className="btn btn-danger btn-lg btn-block delete response-button"
              onClick={handleDeleteWorkstation}
            >
              Delete
            </button>
          }
        </div>
      </form>
    </>
  )
}
