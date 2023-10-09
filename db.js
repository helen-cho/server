var mysql = require('mysql');
var config = {
    connectionLimit:100,
    host:'192.168.45.161',
    user:'root',
    password:'1234',
    database:'backdb',
    port:'3306'
}

var pool = mysql.createPool(config);
var connection;
exports.connect = function() {
    pool.getConnection(function(err, con) {
        if(err) console.log('db접속 오류:', err)
        else connection = con;
    });
}

exports.get = function() {
    return connection;
};