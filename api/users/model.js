const tbl = 'users';
const basic = require('../basicModel')(tbl);
// const db = require('../../config/dbConfig');

module.exports = {
  get: basic.getArr,
}