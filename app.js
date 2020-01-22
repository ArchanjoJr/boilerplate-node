const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api/v1', api);

const routes = [];
api.stack.forEach(obj => routes.push({
  endpoint: obj.route.path,
  method: obj.route.stack[0].method,
}));

module.exports = {
  app,
  routes,
};
