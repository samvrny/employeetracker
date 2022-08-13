const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');

function printResults(directory) {
    if(directory === 'View All Employees') {
        allEmployees(directory);
    } else if(directory === 'View All Roles') {
        allRoles(directory);
    } else if(directory === 'View All Departments') {
        allDepartments(directory);
    } else if(directory === 'Add Employee') {
        addEmployee(directory);
    }
};

//gets all employee information
function allEmployees() {
    const sql = `SELECT employees.*, roles.title
                 AS role_id
                 FROM employees
                 LEFT JOIN roles
                 ON employees.role_id = roles.id`;
        db.query(sql, (err, rows) => {
            console.table(rows);
            initializeProgram();
        })
}

//gets all role information
function allRoles() {
    const sql = `SELECT roles.*, departments.name
                AS department_id
                FROM roles
                LEFT JOIN departments
                ON roles.department_id = departments.id`;
    db.query(sql, (err, rows) => {
        console.table(rows);
        initializeProgram();
    })
}

//gets all departments
function allDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        console.table(rows);
        initializeProgram();
    })
}

//adds a new employee to the database NOTE: going to need to add validation, and the employees role.
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'firstName',
                message: 'Please enter employees first name'
            },
            {
                type: 'text',
                name: 'lastName',
                message: 'Please enter employees last name'
            }
        ])
        .then(({firstName, lastName}) => {
            const sql = `INSERT INTO employees (first_name, last_name)
                         VALUES (?,?)`;
            const params = [firstName, lastName];
            db.query(sql, params, (err, result) => {
                console.log('Employee added!');
                initializeProgram();
            })
        })
    
}

module.exports = printResults;

