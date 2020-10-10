import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export function SingleWorkstation() {
  const [workstation, setWorkstation] = useState({
    name: '',
    serial: '',
    dateAcquired: '',
    description: '',
    processor: '',
    os: '',
    active: true,
    lastUpdate: '',
    type: '',
  })

  const params = useParams()
  const id = params.id

  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()

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

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedWorkstation = { ...workstation, [fieldName]: value }

    setWorkstation(updatedWorkstation)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Workstations/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(workstation),
    })

    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')
      setErrorMessage(message)
    } else {
      history.push('/')
    }
  }
  // useEffect(function () {
  //   async function loadWorkstationDetails() {
  //     const url = `/api/Workstations/${id}`
  //     const response = await fetch(url)
  //     const json = await response.json()
  //     setWorkstation(json)
  //   }
  //   loadWorkstationDetails()
  // }, [])
  return (
    <>
      {/* <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Workstations</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single Workstation
            </li>
          </ol>
        </nav>
      </div> */}
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
              value={workstation.name}
              name="name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
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
          {/* <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Assigned To
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Assigned To"
            aria-label="Assigned To"
            aria-describedby="basic-addon1"
          />
        </div> */}
          {/* <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Location
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon1"
          />
        </div> */}
          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
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
          {/* <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Active
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={workstation.active.toString()}
              name="active"
              aria-label="Active"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div> */}
          <div className="input-group mb-3">
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
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Save Changes
          </button>
          <button type="button" className="btn btn-danger btn-lg btn-block">
            Delete
          </button>
        </div>
      </form>
    </>
  )
}
