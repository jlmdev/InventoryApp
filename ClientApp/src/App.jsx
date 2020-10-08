import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Home } from './pages/Home'
import { SingleWorkstation } from './pages/SingleWorkstation'
import { Workstations } from './pages/Workstations'
import { Servers } from './pages/Servers'
import { SingleServer } from './pages/SingleServer'
import { NetworkDevices } from './pages/NetworkDevices'
import { SingleNetworkDevice } from './pages/SingleNetworkDevice'
import { DeviceUsers } from './pages/DeviceUsers'
import { SingleDeviceUser } from './pages/SingleDeviceUser'
import { Locations } from './pages/Locations'
import { SingleLocation } from './pages/SingleLocation'
import { Users } from './pages/Users'
import { SingleUser } from './pages/SingleUser'

export function App() {
  return (
    <>
      <div className="header-container">
        <header>
          <ul>
            <li>
              <svg
                width="32"
                height="32"
                viewBox="0 0 16 16"
                className="bi bi-card-checklist"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </li>
            <li>Inventory</li>
          </ul>
          <ul>
            <li>UserName</li>
            <li>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 16 16"
                className="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </li>
          </ul>
        </header>
      </div>
      <div className="header-spacer"></div>

      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route exact path="/">
          <Workstations />
        </Route>
        <Route exact path="/workstations/:id">
          <SingleWorkstation />
        </Route>
        <Route exact path="/servers">
          <Servers />
        </Route>
        <Route exact path="/servers/single-server">
          <SingleServer />
        </Route>
        <Route exact path="/network-devices">
          <NetworkDevices />
        </Route>
        <Route exact path="/network-devices/single-network-device">
          <SingleNetworkDevice />
        </Route>
        <Route exact path="/device-users">
          <DeviceUsers />
        </Route>
        <Route exact path="/device-users/single-device-user">
          <SingleDeviceUser />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/locations/single-location">
          <SingleLocation />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/single-user">
          <SingleUser />
        </Route>
      </Switch>
    </>
  )
}
