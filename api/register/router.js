const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./model');

router.post('/', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  db.post(user)
    .then(created => {
      res.status(201).json(created);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Could not create the new user.'
      });
    });
})

module.exports = router;