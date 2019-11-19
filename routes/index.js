const express = require('express');

const api = express.Router();

// INSERT HERE YOUR APP ROUTES AND ENDPOINTS
api.get('/ping', (request, response) => {
  try {

    console.log({ request })
    return response.status(200).json({ message: 'pong' });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = api;
