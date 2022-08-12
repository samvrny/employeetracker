const inquirer = require('inquirer');
const fs = require('fs');

initializeProgram = function() {
    inquirer    
        .prompt([
            {
                type: 'list',
                name: 'directory',
                message: 'Welcome to Sunshine Farms. Please select an option from the menu below',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']

            }
        ])
        .then(({directory}) => {
            if(directory === 'View All Employees') {
                
            }
        })
}

module.exports = initializeProgram;