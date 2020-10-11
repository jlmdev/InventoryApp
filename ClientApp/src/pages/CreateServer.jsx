import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function CreateServer() {
  const today = new Date().toISOString().substr(0, 10)

  const [newServer, setNewServer] = useState({
    name: '',
    serial: '',
    dateAcquired: today,
    description: '',
    processor: '',
    os: '',
    lastUpdate: today,
    ip: '',
    subnet: '',
    gateway: '',
  })

  const [errorMessage, seterrorMessage] = useState()

  const history = useHistory()

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedServer = { ...newServer, [fieldName]: value }

    setNewServer(updatedServer)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Servers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newServer),
    })

    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')
      seterrorMessage(message)
    } else {
      history.push('/servers')
    }
  }

  function handleCancelButton(event) {
    history.push('/servers')
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
              value={newServer.name}
              name="name"
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
              placeholder="Serial Number"
              aria-label="Serial Number"
              aria-describedby="basic-addon1"
              value={newServer.serial}
              name="serial"
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
              placeholder="Date Acquired"
              aria-label="Date Acquired"
              aria-describedby="basic-addon1"
              value={newServer.dateAcquired}
              name="dateAcquired"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3">
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
              value={newServer.description}
              name="description"
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
              placeholder="Processor"
              aria-label="Processor"
              aria-describedby="basic-addon1"
              value={newServer.processor}
              name="processor"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3">
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
              value={newServer.os}
              name="os"
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
              placeholder="Last updated"
              aria-label="Last updated"
              aria-describedby="basic-addon1"
              value={newServer.lastUpdate}
              name="lastUpdate"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                IP
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="IP"
              aria-label="IP"
              aria-describedby="basic-addon1"
              value={newServer.ip}
              name="ip"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Subnet
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Subnet"
              aria-label="Subnet"
              aria-describedby="basic-addon1"
              value={newServer.subnet}
              name="subnet"
              onChange={handleFormFieldChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Gateway
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Gateway"
              aria-label="Gateway"
              aria-describedby="basic-addon1"
              value={newServer.gateway}
              name="gateway"
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
