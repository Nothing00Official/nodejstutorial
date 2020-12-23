'use strict'

module.exports = executeQuery;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'db.vitadafounder.com',
    user: 'tutorial',
    password: 'VDFvps5117846253',
    database: 'tutorial'
});

function executeQuery (sql, params, callback) {
    connection.query(sql, params, callback);
}