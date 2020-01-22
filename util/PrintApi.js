const Table = require('cli-table');

module.exports.printRoutes = (baseUrl, routes) => {
  const table = new Table({ head: ['Path', 'Method'] });
  console.log(`\nAPI ofr ${baseUrl}`);
  console.log('***************************');
  for (const key of routes) {
    const o = {};
    o[key.method] = key.endpoint;
    table.push(o);
  }
  console.log(table.toString());
  return table;
};
