const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');

module.exports = {
  genToken: function(user) {
    const pyld = {
      subject: user.id,
      username: user.username,
      department: user.department,
    }
    const opt = {
      expiresIn: '2hr',
    }
    return jwt.sign(pyld, jwtSecret, opt)
  }
}