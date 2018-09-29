var mysql = require('mysql')


function database(sql,callback){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'demo1'
      });
      
      connection.connect()
      
      connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        callback && callback(rows);
      })
      
      connection.end()
}

module.exports = database;
