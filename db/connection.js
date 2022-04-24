const mysql = require('mysql2');
// const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
});

// connection.query = util.promisify(connection.query);

connection.connect(function (err) {
    if(err) {
        throw err;
    } else {
        console.log("Successfully connected to mysql");
    }
});

module.exports = connection;