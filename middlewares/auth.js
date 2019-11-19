const services = require('../services');
const logger = require('../services/winston');

function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    logger.error('Do not Have Authorizantion', {
      header: req.headers,
      time: new Date().toLocaleString(),
      ip: req.ip,
      status_code: 403,
      route: req.route,
    });
    return res.status(401).send({ message: 'UNAUTHORIZED' });
  } else {
    next();
  }
}

module.exports = isAuth;
