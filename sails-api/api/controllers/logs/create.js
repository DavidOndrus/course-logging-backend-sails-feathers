const axios = require('axios');

module.exports = async function create(req, res) {
  const response = await axios.post(`http://feathers-logs-service:8081${req.path}`, req.body);
  return res.status(response.status).send(response.data);
};
