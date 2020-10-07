# Change Log

## 2020.10.7

- initial scope may be overzealous for the time frame given current experience
  - Narrowing first iteration to workstation list and single workstation view
  - Narrowing database structure to a single table: workstations
    - Removing FK fields from workstations table to avoid having to migrate existing data in those fields once those tables are created
  - Removing breadcrumb feature since it isn't currently needed (commented out for now)
- Changing search button for a search text input to search by name by entering text.
- Once workstations functionality is working as intended, will add other features as time allows.
