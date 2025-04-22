# School-Management

# School Management API

A RESTful API built with **Node.js**, **Express.js**, and **MySQL** to manage school data. It allows users to:

- Add new schools with location info
- Retrieve a list of schools sorted by proximity to a user's location

-------------------

## Features

- Add new school records
- List all schools sorted by distance (from user-provided coordinates)
- Input validation
- Distance calculation using Euclidean method (basic proximity)
- MySQL integration

-------------

## Postman API

- **Add School**: `POST /addSchool`
- **List Schools by Proximity**: `GET /listSchools?latitude=LAT&longitude=LON`

_Replace `LAT` and `LON` with actual values._

Example:
GET http://localhost:3000/listSchools?latitude=13.9716&longitude=77.594
-----------------------------------------------------------------------------------------------
POST /addSchool

Request Body (JSON):
json
Copy
Edit
{
  "name": "Greenwood High",
  "address": "Koramangala, Bangalore",
  "latitude": 12.9352,
  "longitude": 77.6141
}
------------------------------
**response**
{
    "message": "School added successfully",
    "schoolId": 3
}

**List Schools by Proximity
**GET /listSchools?latitude=12.9716&longitude=77.5946
--------------------------------------------------------------------------------------------------
**Response**:
json
Copy
Edit
[
  {
    "id": 1,
    "name": "Greenwood High",
    "address": "Koramangala, Bangalore",
    "latitude": 12.9352,
    "longitude": 77.6141,
    "distance": "0.04"
  },
  ...
]


-------------------------------------------------------------------------------------------------
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/praveenramakurthi/School-Management.git
cd School-Management
------
2. Install Dependencies
bash
Copy
Edit
npm install
------
3. Configure Environment Variables
Create a .env file in the root:
ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=school_db
PORT=3000
-------
4. Start the Server
bash
Copy
Edit
npm start
# or with nodemon
npm run dev
```
