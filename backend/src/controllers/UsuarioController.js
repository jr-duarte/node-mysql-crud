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

    store(req, res) {

        const { email, senha } = req.body;

        const sql = 'INSERT INTO USUARIO VALUES (DEFAULT, ?, ?)';

        mysql.query(sql, [email, senha], (err, rows, fields) => {
            if (!err) {
                res.send({ message: 'Usuário cadastrado com sucesso', id: rows.insertId, email, senha });
            } else {
                res.send({ message: 'Ocorreu um erro inesperado, contate o administrador' });
                console.log(err);
            }
        });

    },

    update(req, res) {

        const { idUsuario, email, senha } = req.body;

        const sql = 'UPDATE USUARIO SET EMAIL = ?, SENHA = ? WHERE IDUSUARIO = ? ';

        mysql.query(sql, [email, senha, idUsuario], (err, rows, fields) => {
            if (!err) {
                if (rows.changedRows != 0) {
                    res.send({ message: 'Usuário alterado com sucesso', idUsuario, email, senha })
                } else {
                    res.send({ message: 'Nenhuma ação foi realizada verifique os parâmetros' })
                }
            } else {
                res.send({ message: 'Ocorreu um erro inesperado, contate o administrador' });
                console.log(err);
            }
        });

    },

    destroy(req, res) {
        const { idUsuario } = req.body;
        
        const sql = 'DELETE FROM USUARIO WHERE IDUSUARIO = ? ';

        mysql.query(sql, [idUsuario], (err, rows, fields) => {
            if (!err) {
                if (rows.affectedRows != 0) {
                    res.send({ message: 'Usuário deletado com sucesso', idUsuario })
                } else {
                    res.send({ message: 'Nenhuma ação foi realizada verifique os parâmetros' })
                }

            } else {
                res.send({ message: 'Ocorreu um erro inesperado, contate o administrador' });
                console.log(err);
            }
        });
    }
}