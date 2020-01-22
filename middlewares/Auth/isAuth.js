const { HTTP_STATUS, ApiError } = require('../../util');

module.exports.isAuth = (Request, Response, Next) => {
  if (!Request.headers.authorization) throw new ApiError('UNAUTHORIZED', HTTP_STATUS.UNAUTHORIZED);
  Next();
};
