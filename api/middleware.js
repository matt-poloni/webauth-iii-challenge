const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');

module.exports = {
  auth,
}

function auth(req, res, next) {
  const token = req.headers.authorization;
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if(!err) {
      req.decoded = decoded;
      next();
    } else {
      res.status(403).json({ error: 'You shall not pass!' })
    }
  })
}
