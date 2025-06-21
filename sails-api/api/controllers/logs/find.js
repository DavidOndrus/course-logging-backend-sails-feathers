const axios = require('axios');

module.exports = async function find(req, res) {
  const response = await axios.get(`http://feathers-logs-service:8081${req.path}`, {
    params: req.query,
  });
  return res.status(response.status).send(response.data);
};
