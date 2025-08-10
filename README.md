# Width API

A simple RESTful API with MVC pattern for handling width data.

## Features

- POST endpoint to save width data
- GET endpoint to retrieve all saved width data
- CORS enabled for cross-origin requests
- MongoDB database integration
- Ready for Render.com deployment

## API Endpoints

- `GET /api/width`: Get all width records
- `POST /api/width`: Create a new width record

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```
4. Start development server:
   ```
   npm run dev
   ```

## Deployment on Render

1. Create a new Web Service on Render
2. Link to your GitHub repository
3. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: Add your `MONGODB_URI` and other environment variables

## Sample Requests

### Create a new width record

```bash
curl -X POST -H "Content-Type: application/json" -d '{"width": 100}' http://localhost:5000/api/width
```

### Get all width records

```bash
curl http://localhost:5000/api/width
```
