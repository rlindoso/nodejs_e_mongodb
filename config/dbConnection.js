var mysql = require('mysql');

module.exports = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'myUserName',
        password: 'myUserPassWd',
        database: 'portal_noticias'
    });
}