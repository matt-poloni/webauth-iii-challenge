const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./model');
const hlp = require('../helpers');

router.post('/', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  db.post(user)
    .then(created => {
      const token = hlp.genToken(user);
      res.status(201).json({token});
    })
    .catch(err => {
      res.status(500).json({
        error: 'Could not create the new user.'
      });
    });
})

module.exports = router;