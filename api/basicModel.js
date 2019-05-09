const db = require('../config/dbConfig');

module.exports = function(tbl) {
  return {
    get: function(val, sel=['*']) {
      return val
        ? db(tbl).select(sel).where(val).first()
        : db(tbl).select(sel);
    },
    getArr: function(val, sel=['*']) {
      return val
        ? db(tbl).select(sel).where(val)
        : db(tbl).select(sel);
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
