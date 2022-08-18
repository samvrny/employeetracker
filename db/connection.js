const mysql = require('mysql2');
const password = require('../password');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        //enter your mysql password here (as a string in the '')
        password: '',
        database: 'employee_tracker'
    },
    console.log('Connected to the database')
);

module.exports = db;
