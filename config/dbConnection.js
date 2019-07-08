var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'myUserName',
        password: 'myUserPassWd',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    return connMySQL;
}