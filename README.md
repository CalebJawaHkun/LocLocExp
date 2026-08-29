# simple_pipeline_v1

Version 1.0.0

## Overview
This project is a lightweight Node.js + Express application for managing and exposing location data through a simple REST API. It uses MongoDB via Mongoose and serves a basic frontend from the public folder. The app is set up to connect to a database at startup and expose routes for the home page, user placeholder endpoint, and place data.

## Features
- Express server with JSON parsing and static file serving
- MongoDB connection using Mongoose
- Simple place model for flexible document storage
- REST API endpoint for retrieving place records
- Basic project scaffold for a local location app

## Project Structure
- `app.js` – application entry point and route registration
- `bin/www` – server startup file
- `config/db.js` – database connection setup
- `models/Place.js` – Mongoose model for places
- `public/` – static frontend files
- `routes/` – route modules for app endpoints

## Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```

## Routes

### GET `/`
Defined in `routes/index.js`.
- Returns the home page response.
- Currently renders the default Express index view.

### GET `/users`
Defined in `routes/users.js`.
- Returns a basic placeholder response: `respond with a resource`.
- Intended as a starter route for user-related functionality.

### GET `/locloc/places`
Defined in `routes/placeRoutes.js`.
- Retrieves all place records from the MongoDB `places` collection.
- Returns a JSON response with:
  - `success`: boolean
  - `data`: array of place objects
- Supports a query parameter to limit results:
  - `?size=10` returns at most 10 records

Example:
```bash
GET /locloc/places
GET /locloc/places?size=5
```

## Response Format
Successful place retrieval:
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Example Place"
    }
  ]
}
```

Error response:
```json
{
  "success": false,
  "message": "Failed to retrieve places"
}
```

## Notes
- The `Place` model is configured with `strict: false`, which allows storing flexible, schema-less documents.
- The project is intended as a simple pipeline or base template for location-based data retrieval and expansion.
