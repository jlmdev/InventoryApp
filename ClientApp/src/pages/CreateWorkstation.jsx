import React, { useState } from 'react'

export function CreateWorkstation() {
  const [newWorkstation, setNewWorkstation] = useState({
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

  function handleFormFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedWorkstation = { ...newWorkstation, [fieldName]: value }

    setNewWorkstation(updatedWorkstation)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Workstations', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newWorkstation),
    })

    console.log('Submitted the form')
    console.log(newWorkstation)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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
              value={newWorkstation.name}
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
              value={newWorkstation.serial}
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
              value={newWorkstation.dateAcquired}
              name="dateAcquired"
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
              placeholder="Type"
              aria-label="Type"
              aria-describedby="basic-addon1"
              value={newWorkstation.type}
              name="type"
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
              value={newWorkstation.name}
              name="name"
              onChange={handleFormFieldChange}
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
              value={newWorkstation.name}
              name="name"
              onChange={handleFormFieldChange}
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
              placeholder="OS"
              aria-label="OS"
              aria-describedby="basic-addon1"
              value={newWorkstation.os}
              name="os"
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
              value={newWorkstation.processor}
              name="processor"
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
              value={newWorkstation.lastUpdate}
              name="lastUpdate"
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
              placeholder="Active"
              aria-label="Active"
              aria-describedby="basic-addon1"
              value={newWorkstation.active}
              name="active"
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
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon1"
              value={newWorkstation.description}
              name="description"
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
