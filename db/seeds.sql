INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Customer Service'),
    ('Software Development'),
    ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Salesperson', 65000, 1),
    ('Secretary', 40000, 1),
    ('Accountant', 75000, 2),
    ('Operator', 40000, 3),
    ('Quality Assurance Rep', 40000, 3)
    ('Customer Service Rep', 40000, 3),
    ('Senior Developer', 125000, 4),
    ('Junior Developer', 90000, 4),
    ('Entry Developer', 60000, 4)
    ('Graphic Designer', 55000, 5),
    ('Marketing Representative', 45000, 5),
    ('Data Analyst', 75000, 5);

-- INSERT INTO managers (first_name, last_name, department_id)
-- VALUES
--     ('Randy', 'Randerson', 1),
--     ('Christine', 'Peterson', 2),
--     ('Jamal', 'McDonald', 3),
--     ('Henry', 'Schlieffen', 4),
--     ('Sarah', 'Brandhagen', 5);

INSERT INTO employees (first_name, last_name, role_id)
VALUES 
    ('James', 'Fraser', 1),
    ('Jack', 'London', 2),
    ('Robert', 'Bruce', 3),
    ('Peter', 'Greenaway', 4),
    ('Derek', 'Jarman', 5),
    ('Paolo', 'Pasolini', 6),
    ('Heathcote', 'Williams', 7),
    ('Sandy', 'Powell', 8),
    ('Emil', 'Zola', 9),
    ('Sissy', 'Coalpits', 10),
    ('Antoinette', 'Capet', 11),
    ('Samuel', 'Delany', 12);


    