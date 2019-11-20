const express = require('express');
const { errorResponse, genericResponse } = require('../util')
const api = express.Router();

// INSERT HERE YOUR APP ROUTES AND ENDPOINTS
api.get('/ping', (request, response) => {
  try {
    return genericResponse(200, 'TESTE', response)
  } catch (error) {
    return errorResponse(error, response)
  }
});

module.exports = api;
