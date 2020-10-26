# InventoryApp

This app is designed to be a proof of concept for an internal inventory app optimized for use primarily on a smartphone or tablet. It can and will work on a desktop if desired. Many IT professionals are on the move a lot and being able to use it from a smartphone can save a lot of time when needing to access a detail quickly.

The app is being deployed in a demo mode where most of the restrictions normally applied to prevent misuse have been removed to show basic functionality without requiring logins.

Deletes are still disabled to discourage unauthorized users from completely clearing out the database.

The pages of the application that are accessible to everyone are:

- Workstations
- Servers
- Network
- Locations

- Hidden Options (must be logged in to see)
  - Users
  - Sign Out

## Workstations

Page contains:

- Breadcrumb Navigation
- Search Bar
- Create New Workstation
  - In practice, this option would only be accessible to authenticated users. In demo mode, it is accessible by default
- Labeled buttons for each workstation that link to the detail page for that workstation

## Create Workstation

Page contains:

- Details for each property of the new workstation
  - Most are text edits
  - Dates use a date picker
  - The Locations use a select box
- Once details are as desired, the Save Changes button adds the new workstation to the database
- The cancel button ignores the changes and redirects the user to the Workstations page

## Single Workstation

Page contains:

- Breadcrumb Navigation
- Details for each property of the new workstation
  - Most are text edits
  - Dates use a date picker
  - The Locations use a select box
- Once details are as desired, the Save Changes button adds the new workstation to the database
- There is a delete button which is only accessible if logged in This button allows deletion of that workstation after a confirmation prompt

## Servers

Page contains:

- Breadcrumb Navigation
- Search Bar
- Create New Server
  - In practice, this option would only be accessible to authenticated users. In demo mode, it is accessible by default
- Labeled buttons for each Server that link to the detail page for that Server

## Create Server

Page contains:

- Details for each property of the new Server
  - Most are text edits
  - Dates use a date picker
- Once details are as desired, the Save Changes button adds the new Server to the database
- The cancel button ignores the changes and redirects the user to the Servers page

## Single Server

Page contains:

- Breadcrumb Navigation
- Details for each property of the new server
  - Most are text edits
  - Dates use a date picker
- Once details are as desired, the Save Changes button adds the new server to the database
- There is a delete button which is only accessible if logged in. This button allows deletion of that server after a confirmation prompt

## Network Devices

Page contains:

- Breadcrumb Navigation
- Search Bar
- Create New Network Device
  - In practice, this option would only be accessible to authenticated users. In demo mode, it is accessible by default
- Labeled buttons for each network device that link to the detail page for that network device

## Create Network Device

Page contains:

- Details for each property of the new network device
  - Most are text edits
  - Dates use a date picker
- Once details are as desired, the Save Changes button adds the new network device to the database
- The cancel button ignores the changes and redirects the user to the network devices page

## Single Network Device

Page contains:

- Breadcrumb Navigation
- Details for each property of the new network device
  - Most are text edits
  - Dates use a date picker
- Once details are as desired, the Save Changes button adds the new network device to the database
- There is a delete button which is only accessible if logged in. This button allows deletion of that network device after a confirmation prompt

## Locations

Page contains:

- Breadcrumb Navigation
- Search Bar
- Create New Location
  - In practice, this option would only be accessible to authenticated users. In demo mode, it is accessible by default
- Labeled buttons for each location that link to the detail page for that location

## Create Location

Page contains:

- Details for each property of the new location
- Once details are as desired, the Save Changes button adds the new location to the database
- The cancel button ignores the changes and redirects the user to the locations page

## Single Location

Page contains:

- Breadcrumb Navigation
- Details for each property of the new location
- Once details are as desired, the Save Changes button adds the new location to the database
- There is a delete button which is only accessible if logged in. This button allows deletion of that location after a confirmation prompt

## Users

Page contains:

- Breadcrumb Navigation
- Search Bar
- Create New user
  - In practice, this option would only be accessible to authenticated users.
- Labeled buttons for each user that link to the detail page for that user

## Create User

Page contains:

- Details for each property of the new user
- Once details are as desired, the Save Changes button adds the new user to the database
- The cancel button ignores the changes and redirects the user to the users page

## Single User

Page contains:

- Breadcrumb Navigation
- Details for each property of the new user
- Once details are as desired, the Save Changes button adds the new user to the database
- There is a delete button which is only accessible if logged in as the administrator. This button allows deletion of that user after a confirmation prompt
