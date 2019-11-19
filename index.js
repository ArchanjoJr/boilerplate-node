#!/usr/bin/env nodemon
const { getRoutes } = require('get-routes');
const app = require('./app');
const { port } = require('./configuration/config');

const r = getRoutes(app);

app.listen(port, () => {
  console.log(r);
  console.log(`api rest em localhost: ${port}`);
});
module.exports = app;
