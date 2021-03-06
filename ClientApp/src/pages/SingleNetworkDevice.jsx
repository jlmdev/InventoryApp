import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isLoggedIn } from '../Auth'

export function SingleNetworkDevice() {

  // Network Device State
  const [networkDevice, setNetworkDevice] = useState({
    name: '',
    serial: '',
    type: '',
    dateAcquired: '',
    description: '',
    lastUpdated: '',
    ip: '',
    subnet: '',
    gateway: '',
  })

  const params = useParams()
  const id = params.id

  // const history = useHistory()
  // const [errorMessage, setErrorMessage] = useState()

  // Loads Network Device Data
  useEffect(() => {
    const fetchNetworkDevice = () => {
      fetch(`/api/NetworkDevices/${id}`)
        .then((response) => response.json())
        .then((apiData) => {
          apiData.dateAcquired = apiData.dateAcquired.substr(0, 10)
          apiData.lastUpdated = apiData.lastUpdated.substr(0, 10)
          setNetworkDevice(apiData)
        })
    }
    fetchNetworkDevice()
  }, [id])

  // Updates Network Device State when fields are changed
  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedNetworkDevice = { ...networkDevice, [fieldName]: value }

    setNetworkDevice(updatedNetworkDevice)
  }

  // PUTs the updated information to the database
  async function handleFormSubmit(event) {
    event.preventDefault()

    await fetch(`/api/NetworkDevices/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(networkDevice),
    })
  }

  // DELETEs the network device
  async function handleDeleteNetworkDevice(event) {
    event.preventDefault()

    if (window.confirm('Are you sure you want to delete this?')) {
      await fetch(`/api/NetworkDevices/${id}`, {
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
            <Link to="/network-devices">Network Devices</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {networkDevice.name}
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
              value={networkDevice.name}
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
              value={networkDevice.serial}
              name="serial"
              aria-label="Serial Number"
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
              value={networkDevice.type}
              name="type"
              aria-label="Type"
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
              value={networkDevice.description}
              name="description"
              aria-label="Description"
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
              value={networkDevice.dateAcquired}
              name="dateAcquired"
              aria-label="Date Acquired"
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
              value={networkDevice.lastUpdated}
              name="lastUpdated"
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
              value={networkDevice.ip}
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
              value={networkDevice.subnet}
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
              value={networkDevice.gateway}
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
              onClick={handleDeleteNetworkDevice}>
              Delete
            </button>
          }
        </div>
      </form>
    </>
  )
}
