const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');
let printResults = require('./logic');

initializeProgram = function() {
    inquirer    
        .prompt([
            {
                type: 'list',
                name: 'directory',
                message: 'Welcome to Acme Inc. Please select an option from the menu below',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']

            }
        ])
        .then(({directory}) => {
            printResults(directory);
        })
}

initializeProgram();
