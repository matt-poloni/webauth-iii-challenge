const db = require('../config/dbConfig');

module.exports = function(tbl) {
  return {
    get: function(val) {
      return val
        ? db(tbl).where(val).first()
        : db(tbl);
    },    
    post: function(entry) {
      return db(tbl).insert(entry);
    },
    put: function(id, changes) {
      return db(tbl).where({id}).update(changes);
    },
    del: function(id) {
      return db(tbl).where({id}).del();
    }
  }
}
