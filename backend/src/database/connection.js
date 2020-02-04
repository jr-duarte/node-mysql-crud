const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect(err => {
    if (!err) {
        console.log('Conectado ao banco de dados MYSQL');
    } else {
        console.error('Erro ao se conectar ao banco de dados MYSQL')
    }
});

module.exports = connection;