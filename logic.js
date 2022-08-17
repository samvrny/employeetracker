const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');
const { rawListeners } = require('process');

//calls the functions that print the options results
function printResults(directory) {
    if(directory === 'View All Employees') {
        allEmployees(directory);
    } else if(directory === 'View All Roles') {
        allRoles(directory);
    } else if(directory === 'View All Departments') {
        allDepartments(directory);
    } else if(directory === 'Add Employee') {
        addEmployee(directory);
    } else if(directory === 'Add Role') {
        addRole(directory);
    } else if(directory === 'Add Department') {
        addDepartment(directory);
    } else if(directory === 'Update Employee Role') {
        updateEmployeeRole(directory);
    }
};

//THE MANAGER ID SHOULD REFERENCE THE ROLE ID? PERHAPS?
//gets all employee information
function allEmployees() {
    const sql = `SELECT employees.*,
                 roles.title AS role,
                 roles.salary AS salary,
                 departments.name AS department,
                 CONCAT(manager.first_name, ' ', manager.last_name) AS manager
                 FROM employees
                 LEFT JOIN roles ON employees.role = roles.id
                 LEFT JOIN departments ON roles.department = departments.id
                 LEFT JOIN employees manager ON employees.manager_id = manager.id`;
        db.query(sql, (err, rows) => {
            console.log(err);
            console.table(rows);
            initializeProgram();
        })
};

//gets all role information
function allRoles() {
    const sql = `SELECT roles.*, departments.name
                AS department
                FROM roles
                LEFT JOIN departments
                ON roles.department = departments.id`;
    db.query(sql, (err, rows) => {
        console.table(rows);
        initializeProgram();
    })
};

//gets all departments
function allDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        console.table(rows);
        initializeProgram();
    })
};

//adds a new employee to the database NOTE: going to need to add validation, and the employees role/department
function addEmployee() {
    const sql2 = `SELECT id, title FROM roles`;
    db.query(sql2, (err, rows) => {
        let roles = rows.map(function(row) {
            return {name: row.title, value: row.id}
        })
    const sql2 = `SELECT * FROM employees`;
    db.query(sql2, (err, rows) => {
        let managers = rows.filter(function(row) {
            if(row.manager_id === null) {
                return true;//{name: row.first_name + ' ' + row.last_name, value: row.id}
            }
        })
        console.table(managers);
        let managersList = managers.map(function(manager) {
            return {name: manager.first_name + ' ' + manager.last_name, value: manager.id}
        })
        console.table(managersList);
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
            },
            {
                type: 'list',
                name: 'selectRole',
                message: 'What is this employees role?',
                choices: roles
            },
            {
                type: 'list',
                name: 'selectManager',
                message: 'Who is this employees manager?',
                choices: managersList
            }
        ])
        .then(({firstName, lastName, selectRole, selectManager}) => {
            const sql = `INSERT INTO employees (first_name, last_name, role, manager_id)
                         VALUES (?,?,?,?)`;
            const params = [firstName, lastName, selectRole, selectManager];
            db.query(sql, params, (err, result) => {
                console.log('Employee added!');
                initializeProgram();
            })
        })
    })    
    })
};

//adds a new role to the database
function addRole() { //add validation to the new role question, and get it asking what department it belongs too
    const sql2 = `SELECT id, name FROM departments`;
    db.query(sql2, (err, rows) => {
        let departments = rows.map(function(row) {
            return {name: row.name, value: row.id}
        })
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'roleName',
                message: 'What is the name of the new role?'
            },
            {
                type: 'number',
                name: 'salary',
                message: 'Please enter this roles salary (only answers that are all numbers are acceptable)'
            },
            {
                type: 'list',
                name: 'departmentSelect',
                message: 'Please select what department this role belongs to',
                choices: departments
            }
        ])
        .then(({roleName, salary, departmentSelect}) => {
            const sql = `INSERT INTO roles (title, salary, department)
                         VALUES (?,?,?)`;
            const params = [roleName, salary, departmentSelect];
            db.query(sql, params, (err, result) => {
                console.log('Role added!');
                initializeProgram();
            })
        })
    })
};

//adds a new department to the database
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'departmentName',
                message: 'What is the new departments name?'
            }
        ])
        .then(({departmentName}) => {
            const sql = `INSERT INTO departments (name)
                         VALUES (?)`;
            const params = [departmentName];
            db.query(sql, params, (err, result) => {
                console.log('Department added!');
                initializeProgram();
            })
        })
};

//updates the employee role
function updateEmployeeRole() {
    const sql = `SELECT employees.*, roles.id
                 AS role,
                 roles.title AS role_title
                 FROM employees
                 LEFT JOIN roles ON employees.role = roles.id`;

    db.query(sql, (err, rows) => {
        let employeeList = rows.map(function(row) {
            return {name: row.first_name + ' ' + row.last_name, value: row.id}
        })

    const sql2 = `SELECT id, title FROM roles`;
    db.query(sql2, (err, rows) => {
        let roles = rows.map(function(row) {
            return {name: row.title, value: row.id}
        })   

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selectEmployee',
                message: 'Select the employee rose role you wish to update',
                choices: employeeList
            },
            {
                type: 'list',
                name: 'selectNewRole',
                message: 'Select a new role for the employee',
                choices: roles
            }
        ])
        .then(({selectEmployee, selectNewRole}) => {
            const sql = `UPDATE employees SET role = ? WHERE id = ?`;
            const params = [selectNewRole, selectEmployee];
            db.query(sql, params, (err, result) => {
                console.log('Employee Updated!');
                initializeProgram();
            })
        })
    })
    })
};

module.exports = printResults;


// let rawRoles = [];
//         rawRoles = rows.map(function(row) {
//             if(!rawRoles.includes(row)) {
//             return {name: row.role_title, value: row.role}
//             }
//         })
//         console.table(rawRoles);