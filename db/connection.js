const mysql = require('mysql2');
const password = require('../password');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: password,
        database: 'employee_tracker'
    },
    console.log('Connected to the database')
);

module.exports = db;

//NOTES: 1)Will need to add 'NOT NULL' to several things in Schema to get it to work
//validation will be needed with the prompts and selectors to avoid errors/issues with the application
//2) Need to sort out how to add managers into the mix
//3) Get the .env working and rememeber that there is a variable called 'password' in the password file
//4) Finish all prompts and connect them to the databases:
//* Get all employees needs a department name, salary, and manager printed for each one
//* Add employee and Add Role need to have questions asking them about what role or department they are going 
//to belong too