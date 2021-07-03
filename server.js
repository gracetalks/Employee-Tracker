const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user: 'root',
    password: 'Cyn*963.',
    database: 'tracker'
});

connection.connect(function(err) {
    if(err) throw err;

    setTimeout(start, 1000);
})

function start(){
    inquirer.prompt({
        name: 'start',
        type: 'list',
        message: 'Welcome please add department',
        choices:['Add Department', 'Add Role', 'Add Employee', 'Remove Department', 'Remove Role', 'Remove Employee', 'View Department','Exit']
    })
    .then(function(answer) {
        console.log(answer);
        if(answer.start === 'Add Department'){
            addDepartment();
        }
        else if(answer.start === 'Add Role'){
            addRole();
        }
        else if(answer.start === 'Add Employee'){
            addEmployee();
        }
        else if(answer.start === 'Remove Department'){
            removeDepartment();
        }
        else if(answer.start === 'View Department'){
            viewDepartment();
        }
        else{
            connection.end();
        }
    })
}

function addRole() {
    inquirer.prompt({
        name: 'Role_Title',
        type: 'input',
        message: 'Which role do you want to add?'
    })
    .then(function(answer){
        console.log(answer.Role_Title)
    })   
}

function addDepartment() {
    inquirer.prompt({
        name: 'Department_Name',
        type: 'input',
        message: 'Which department do you want to add?'
    })
    .then(function(answer){
        console.log(answer.Department_Name)
    })   
}

function addEmployee() {
    inquirer.prompt({
        name: 'Employee_Name',
        type: 'input',
        message: 'Which employee do you want to add?'
    })
    .then(function(answer){
        console.log(answer.Employee_Name)
    })   
}
function removeDepartment(){
    console.log('hello')
}

function viewDepartment(){
    connection.query('select * from department', function (err, result, fields) {
        if(err) throw err;
        console.table(result);
    })
}