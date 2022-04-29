use employees_db; 
INSERT INTO department
    (name)
VALUES
    ('Dept1'),
    ('Dept2'),
    ('Dept3'),
    ('Dept4');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('role1', 100, 1),
    ('role2', 200, 2),
    ('role3', 300, 3),
    ('role4', 400, 4);
INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('first1', 'last1', 1, 1),
    ('first2', 'last2', 2, 2),
    ('first3', 'last3', 3, NULL),
    ('first4', 'last4', 4, NULL);