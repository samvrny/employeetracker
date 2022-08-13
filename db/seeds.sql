INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Customer Service'),
    ('Software Development'),
    ('Marketing');

INSERT INTO roles (title, salary, department)
VALUES
    ('Salesperson', 65000, 1),
    ('Secretary', 40000, 1),
    ('Accountant', 75000, 2),
    ('Operator', 40000, 3),
    ('Quality Assurance Rep', 40000, 3),
    ('Customer Service Rep', 40000, 3),
    ('Senior Developer', 125000, 4),
    ('Junior Developer', 90000, 4),
    ('Entry Developer', 60000, 4),
    ('Graphic Designer', 55000, 5),
    ('Marketing Representative', 45000, 5),
    ('Data Analyst', 75000, 5);

INSERT INTO employees (first_name, last_name, role, department)
VALUES 
    ('James', 'Fraser', 1, 1),
    ('Jack', 'London', 2, 1),
    ('Robert', 'Bruce', 3, 2),
    ('Peter', 'Greenaway', 4, 3),
    ('Derek', 'Jarman', 5, 3),
    ('Paolo', 'Pasolini', 6, 3),
    ('Heathcote', 'Williams', 7, 4),
    ('Sandy', 'Powell', 8, 4),
    ('Emil', 'Zola', 9, 4),
    ('Sissy', 'Coalpits', 10, 5),
    ('Antoinette', 'Capet', 11, 5),
    ('Samuel', 'Delany', 12, 5);


    