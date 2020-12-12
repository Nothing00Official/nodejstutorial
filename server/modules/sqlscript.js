'use strict'

module.exports = executeQuery;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'db.vitadafounder.com',
    user: 'tutorial',
    password: '2534617851#vdfVPS',
    database: 'tutorial'
});

function executeQuery (sql, params, callback) {
    connection.query(sql, params, callback);
    //connection.end();
}