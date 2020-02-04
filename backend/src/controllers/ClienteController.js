const mysql = require('../database/connection')
 

module.exports = {
    async index(req, res) {

        mysql.query('SELECT * FROM USUARIO', (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                res.send({ message: 'Ocorreu um erro inesperado, contate o administrador' });
                console.log(err);
            }
        });
    },
}