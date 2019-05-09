const tbl = 'users';
const basic = require('../basicModel')(tbl);
// const db = require('../../config/dbConfig');

module.exports = {
  post,
}

async function post(creds) {
  const [id] = await basic.post(creds);
  return basic.get({id});
}