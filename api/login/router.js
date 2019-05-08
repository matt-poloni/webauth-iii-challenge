const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./model');
const hlp = require('../helpers');

router.post('/', (req, res) => {
  let { username, password } = req.body;
  db.get({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = hlp.genToken(user);
        res.status(200).json({token});
      } else {
        res.status(401).json({
          error: 'You shall not pass!'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: 'Could not check credentials against the users database.'
      });
    });
})

module.exports = router;