const axios = require('axios');

const actApi = axios.create({
  baseURL: 'https://cloud.bry.com.br',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/timestamp-query'
  },
  auth: {
    username: '70831912987',
    password: 'shz17fo0'
  }
});

actApi.post('/carimbo-do-tempo/tsp')
  .then(data => console.log(data.response))
  .catch(err => console.error(err.response));