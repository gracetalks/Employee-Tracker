
INSERT INTO department (id,name) values ('1', 'Engineering');
INSERT INTO department (id,name) values ('2', 'Human Resources');
INSERT INTO department (id,name) values ('3', 'Business');
INSERT INTO department (id,name) values ('4', 'Accounting');
INSERT INTO department (id,name) values ('5', 'Sales');
INSERT INTO department (id,name) values ('6', 'Communications');


INSERT INTO role (id, title, salary, department_id) values ('1', 'Director of HR', '90000.00', '2');
INSERT INTO role (id, title, salary, department_id) values ('2', 'Director of Engineering', '90000.00', '1');
INSERT  INTO role (id, title, salary, department_id) values ('3' 'Mechanical Engineer', "70000.00", '1')
INSERT  INTO role (id, title, salary, department_id) values ('4' 'Sales Director', "90000.00", '5')
INSERT  INTO role (id, title, salary, department_id) values ('5' 'Senior Accountant', "70000.00", '4')
INSERT  INTO role (id, title, salary, department_id) values ('6' 'Junior Accountant', "50000.00", '4')
INSERT  INTO role (id, title, salary, department_id) values ('7' 'Director of Business Development', "90000.00", '3')
INSERT  INTO role (id, title, salary, department_id) values ('8' 'Director of Communications', "90000.00", '6')
INSERT  INTO role (id, title, salary, department_id) values ('9' 'Human Resource Manager', "50000.00", '2')

INSERT INTO employee (id,first_name,last_name, role_id) values ( '1', 'Cynthia', 'Harris', '2')
INSERT INTO employee (id,first_name,last_name, role_id) values ( '6', 'Brad', 'Pitt', '1')
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values ('2', 'John', 'Smith', '3','1')
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values ('3', 'Simon', 'Black', '3','1')
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values ('4', 'Alice', 'Yellow', '3','1')
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values ('5', 'Rachel', 'White', '3','1')
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values ('7', 'Jennifer', 'Aniston', '4','6')