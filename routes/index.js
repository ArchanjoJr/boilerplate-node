const express = require('express');
const { ResponseGenerator, HTTP_STATUS } = require('../util');

const api = express.Router();

// INSERT HERE YOUR APP ROUTES AND ENDPOINTS
api.get('/ping', (request, response) => {
  const responseGenerator = new ResponseGenerator(response);
  try {
    return responseGenerator.GenericResponse(HTTP_STATUS.OK, 'PONG');
  } catch (Error) {
    return responseGenerator.ErrorResponse(Error);
  }
});

module.exports = api;
