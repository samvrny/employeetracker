INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Customer Service'),
    ('Software Development'),
    ('Marketing');

INSERT INTO roles (title, salary, department)
VALUES
    ('Sales Lead', 75000, 1),
    ('Salesperson', 65000, 1),
    ('Secretary', 40000, 1),
    ('Accountant', 75000, 2),
    ('Customer Service Manager', 60000, 3),
    ('Operator', 40000, 3),
    ('Quality Assurance Rep', 40000, 3),
    ('Customer Service Rep', 40000, 3),
    ('Lead Developer', 175000, 4),
    ('Senior Developer', 125000, 4),
    ('Entry Developer', 60000, 4),
    ('Marketing Manager', 75000, 5),
    ('Graphic Designer', 55000, 5),
    ('Marketing Representative', 45000, 5),
    ('Data Analyst', 75000, 5);

INSERT INTO employees (first_name, last_name, role, manager_id)
VALUES 
    ('Sissy', 'Coalpits', 1, NULL),
    ('Antoinette', 'Capet', 2, 1),
    ('Samuel', 'Delany', 3, 1),
    ('Sharon', 'Marsh', 4, 1),
    ('Alex', 'Mason', 5, NULL), 
    ('Randy', 'Randerson', 6, 5), 
    ('Jim', 'Milton', 7, 5), 
    ('Deandra', 'Reynolds', 8, 5), 
    ('Loba', 'Andrade', 9, NULL), 
    ('Arthur', 'Morgan', 10, 9),
    ('John', 'Price', 11, 9),
    ('Lois', 'Griffin', 12, NULL),
    ('Cyril', 'Figgus', 13, 12),
    ('Leslie', 'Knope', 14, 12),
    ('Nandor', 'Relentless', 15, 12),
    ('Sadie', 'Adler', 6, 5),
    ('Marge', 'Simpson', 2, 1);


    