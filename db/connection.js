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


//THESE ARE FOR THE SCHEMA FILE which is apparently very sensitive

// --CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
// --CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
// --CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE CASCADE

// -- CREATE TABLE managers (
// --     id INTEGER AUTO_INCREMENT PRIMARY KEY
// --     first_name VARCHAR(30),
// --     last_name VARCHAR(30),
// --     CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
// -- )




// -- INSERT INTO managers (first_name, last_name, department_id)
// -- VALUES
// --     ('Randy', 'Randerson', 1),
// --     ('Christine', 'Peterson', 2),
// --     ('Jamal', 'McDonald', 3),
// --     ('Henry', 'Schlieffen', 4),
// --     ('Sarah', 'Brandhagen', 5);