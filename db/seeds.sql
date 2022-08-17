INSERT INTO departments (name)
VALUES
    ('Managers'),
    ('Sales'),
    ('Customer Service'),
    ('Software Development'),
    ('Marketing');

INSERT INTO roles (title, salary, department)
VALUES
    ('Manager', 120000, 1),
    ('Vice Manager', 100000, 1),
    ('Associate Manager', 85000, 1),
    ('Salesperson', 85000, 2),
    ('Secretary', 55000, 2),
    ('Quality Assurance Rep', 65000, 3),
    ('Customer Service Rep', 65000, 3),
    ('Lead Developer', 175000, 4),
    ('Senior Developer', 125000, 4),
    ('Entry Developer', 60000, 4),
    ('Graphic Designer', 75000, 5),
    ('Marketing Representative', 65000, 5),
    ('Data Analyst', 75000, 5);

INSERT INTO employees (first_name, last_name, role, manager_id)
VALUES 
    ('Sharon', 'Marsh', 1, 1),
    ('Alex', 'Mason', 2, 1), 
    ('Randy', 'Randerson', 3, 2), 
    ('Ron', 'Swanson', 3, 3),
    ('Jim', 'Milton', 4, 1), 
    ('Deandra', 'Reynolds', 5, 4), 
    ('Loba', 'Andrade', 6, 2), 
    ('Arthur', 'Morgan', 7, 2),
    ('John', 'Price', 8, 1),
    ('Lois', 'Griffin', 9, 1),
    ('Cyril', 'Figgus', 10, 3),
    ('Leslie', 'Knope', 11, 2),
    ('Nandor', 'Relentless', 12, 3),
    ('Sadie', 'Adler', 13, 2),
    ('Marge', 'Simpson', 4, 1),
    ('Eric', 'Cartman', 4, 1),
    ('Kyle', 'Broflavski', 7, 4),
    ('Matthew', 'Mara', 12, 3);


    