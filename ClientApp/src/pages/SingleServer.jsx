import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function SingleServer() {

  // Server State
  const [server, setServer] = useState({
    name: '',
    serial: '',
    dateAcquired: '',
    description: '',
    processor: '',
    os: '',
    lastUpdate: '',
    ip: '',
    subnet: '',
    gateway: '',
  })

  const params = useParams()
  const id = params.id

  // Maintaining for future development
  // const history = useHistory()
  // const [errorMessage, setErrorMessage] = useState()

  // Loads Server Data
  useEffect(() => {
    const fetchServer = () => {
      fetch(`/api/Servers/${id}`)
        .then((response) => response.json())
        .then((apiData) => {
          apiData.dateAcquired = apiData.dateAcquired.substr(0, 10)
          apiData.lastUpdate = apiData.lastUpdate.substr(0, 10)
          setServer(apiData)
        })
    }
    fetchServer()
  }, [id])

  // Updates Server State when non numeric fields are changed
  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedServer = { ...server, [fieldName]: value }

    setServer(updatedServer)
  }

  // PUTs the updated information to the database
  async function handleFormSubmit(event) {
    event.preventDefault()

    await fetch(`/api/Servers/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(server),
    })
  }

  // DELETEs the server
  async function handleDeleteServer(event) {
    event.preventDefault()

    if (window.confirm('Are you sure you want to delete this?')) {
      await fetch(`/api/Servers/${id}`, {
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
            <Link to="/servers">Servers</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {server.name}
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
              value={server.name}
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
              value={server.serial}
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
              value={server.dateAcquired}
              name="dateAcquired"
              aria-label="Date Acquired"
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
              value={server.description}
              name="description"
              aria-label="Type"
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
              value={server.processor}
              name="processor"
              aria-label="Location"
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
              value={server.os}
              aria-label="OS"
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
              value={server.lastUpdate}
              name="lastUpdate"
              aria-label="Last updated"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                IP
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={server.ip}
              name="ip"
              aria-label="IP"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Subnet
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={server.subnet}
              name="subnet"
              aria-label="Subnet"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="input-group mb-3 input-div">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Gateway
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              value={server.gateway}
              name="gateway"
              aria-label="Gateway"
              aria-describedby="basic-addon1"
              onChange={handleFormFieldChange}
            />
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
              onClick={handleDeleteServer}
            >
            Delete
            </button>
          }
        </div>
      </form>
    </>
  )
}
