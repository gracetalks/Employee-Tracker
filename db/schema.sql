CREATE DATABASE tracker;
USE tracker;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department
    foreign key (department_id)
    references department(id)
    ON DELETE cascade
    );
    
CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    constraint fk_role
    FOREIGN KEY (role_id)
    references role(id)
    ON DELETE CASCADE,
    manager_id INTEGER,
    CONSTRAINT fk_employee
    foreign key (manager_id)
    references employee(id)
    ON DELETE SET NULL
    );