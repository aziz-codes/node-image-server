### Node Image Server

A simple Node.js and Express-based server to handle image uploads using Multer. This application automatically manages the `uploads` directory and provides an endpoint to upload and access images programmatically.


## Features
- Upload images via the `/upload` endpoint.
- Automatically manages the `uploads` folder (no need to create it manually).
- Serves uploaded images through a static `/uploads` route.
- Provides meaningful feedback on successful uploads.
### Usage

- clone the repository
- install the dependencies with `npm i`
- run it using `npm start`

### Making Request
- use postman or httpie to make a request
- enter url `http://localhost:5000/upload` and use `POST`
- from body choose `form` or `file`
- enter valid key `image` and upload your image
- hit send to make the api call


### Response

`{
  "message": "File uploaded successfully",
  "path": "http://localhost:5000/uploads/your-file-name"
}`

### Copy the path and open in your browser to view the image.


Happy coding ❤️