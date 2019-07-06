var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com o BD estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'myUserName',
        password: 'myUserPassWd',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com o BD');
    return connMySQL;
}