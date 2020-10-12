import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function CreateNetworkDevice() {
  const today = new Date().toISOString().substr(0, 10)

  const [newNetworkDevice, setNewNetworkDevice] = useState({
    name: '',
    serial: '',
    type: '',
    description: '',
    dateAcquired: today,
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

    const updatedNetworkDevice = { ...newNetworkDevice, [fieldName]: value }

    setNewNetworkDevice(updatedNetworkDevice)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/NetworkDevices', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newNetworkDevice),
    })

    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')
      seterrorMessage(message)
    } else {
      history.push('/network-devices')
    }
  }

  function handleCancelButton(event) {
    history.push('/network-devices')
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
              value={newNetworkDevice.name}
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
              value={newNetworkDevice.serial}
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
              value={newNetworkDevice.dateAcquired}
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
              value={newNetworkDevice.description}
              name="description"
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
              value={newNetworkDevice.lastUpdate}
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
              value={newNetworkDevice.ip}
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
              value={newNetworkDevice.subnet}
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
              value={newNetworkDevice.gateway}
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
