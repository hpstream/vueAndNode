var db = require('../sql/database.js');




function login(callback){
  db('SELECT * FROM sys_user',function(data){
    callback && callback(data)
  })
}

module.exports = {
  login
};