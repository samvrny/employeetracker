const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');
let printResults = require('./logic');

//dont forget to enter your mysql password in db/connection.js before invoking the application!

initializeProgram = function() {
    inquirer    
        .prompt([
            {
                type: 'list',
                name: 'directory',
                message: 'Welcome to Acme Inc. Please select an option from the menu below (Use arrow keys)',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']

            }
        ])
        .then(({directory}) => {
            printResults(directory);
        })
}

initializeProgram();
