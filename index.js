#!/usr/bin/env nodemon
const { app, routes } = require('./app');
const { PORT } = require('./configuration');
const { printRoutes } = require('./util');

app.listen(PORT, () => {
  printRoutes(`LOCALHOST:${PORT}`, routes);
});
module.exports = app;
