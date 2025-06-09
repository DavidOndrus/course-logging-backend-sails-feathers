module.exports = async function requestsLogger(req, res, next) {
  sails.log.debug(`${new Date().toISOString()} ${req.method} ${req.url} ${JSON.stringify(req.body)}`);
  return next();
};
