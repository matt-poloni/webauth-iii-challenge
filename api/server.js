const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRt = require('./register/router');
const loginRt = require('./login/router');
// const usersRt = require('./users/router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/register/', registerRt);
server.use('/api/login/', loginRt);
// server.use('/api/users/', usersRt);

server.get('/', (req, res) => {
  res.send("Up and running.");
});

module.exports = server;
