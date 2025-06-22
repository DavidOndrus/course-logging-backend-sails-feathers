const forwardRequest = require('../../utils/forward-request.js');

module.exports = async function find(req, res) {
  req.query.type = 'system';

  const response = await forwardRequest(sails.config.services.logs.url, req);
  return res.status(response.status).send(response.data);
};
