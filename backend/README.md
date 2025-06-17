# SkyInspect Backend

## Overview

Node SkyInspect backend API for the SkyInspect project. js and Express. It's responsible for authentication and the main business logic of the application. The backend talks to a database and offers a few RESTful API endpoints.

## Benefits of Documenting API Endpoints

Good API documentation is crucial to the maintainability and communication:

- **Clarity:** Clearly explains what each of the endpoints does, its parameters, and its responses.
- **Onboarding:** Speeds up onboarding for new developers and contributors.
- **Debugging:** Great for looking up and solving problems.
- **Integration**: It would be easier for the frontend team and other users to work on integration with the backend.
- **Consistency**: Backends should have stable evolution.

## API Endpoints

### Authentication

#### `POST /api/auth/register`
Registers a new user.
- **Body:** `{ "email": "user@example.com", "password": "yourpassword" }`
- **Response:** `201 Created` or an error message.

#### `POST /api/auth/login`
Logs in a user and returns a JWT token.
- **Body:** `{ "email": "user@example.com", "password": "yourpassword" }`
- **Response:** `{ "token": "<jwt>", "email": "user@example.com" }` or an error message.

### Records

#### `GET /api/records`
Returns all records for the authenticated user.
- **Headers:** `Authorization: Bearer <token>`
- **Returns:** An array of records.

#### `POST /api/records`
Creates a new record.
- **Headers:** `Authorization: Bearer <the access token>`
- **Body:** `{ "field1": "value1",... }`
- **Returns:** The record that was created.

#### `PUT /api/records/:id`
Updates a record by ID.
- **Headers:** `Authorization: Bearer <token>`
- **Body:** `{ "field1": "newvalue",...}`
- **Response:** The updated record.

#### `DELETE /api/records/:id`
Deletes a record by ID.
- **Headers:** `Authorization: Bearer <token>`
- **Reply:** Message in case of success.

>**Note:** Change the field names as per your domain.

## Running the Backend

1. Install dependencies:
```bash
npm install
```
2. Set up environment variables in `.env` (see `.env.example`).
3. Start the server:
```bash
npm run dev
```

## Contributing

- Add to this README about new endpoints.
- Make use of clear and informative commit messages.
- Update the API documentation with details of changes in request or response formats.

---