DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(15,2) NOT NULL,
    department INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role INTEGER,
    department INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES departments(id)
);


