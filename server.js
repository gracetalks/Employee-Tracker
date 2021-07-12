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
        message: 'Welcome! Please Make a Choice:',
        choices:[
            'Add Department', 
            'Add Role', 
            'Add Employee', 
            'Remove Department', 'Remove Role', 'Remove Employee', 'View Department', 'View Role', 'View Employee', 'Update Department', 'Update Role', 'Update Manager', 'Exit']
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
        else if(answer.start === 'Remove Role'){
            removeRole();
        }
        else if(answer.start === 'Remove Employee'){
            removeEmployee();
        }
        else if(answer.start === 'View Department'){
            viewDepartment();
        }
        else if(answer.start === 'View Role'){
            viewRole();
        }
        else if(answer.start === 'View Employee'){
            viewEmployee();
        }
        else if(answer.start === 'Update Department'){
            updateDepartment();
        }
        else if(answer.start === 'Update Role'){
            updateRole();
        }
        else if(answer.start === 'Update Manager'){
            updateManager()
        }
        else{
            connection.end();
        }
    })
}

function updateDepartment() {
    inquirer.prompt([{
        name: 'Department_id',
        type: 'input',
        message: 'What department id would you like to update?'
    },
    {
        name: 'Department_Name',
        type: 'input',
        message: 'Please insert your updated department name.'
    }])
    .then(function(answer){
        let query = connection.query(
            "UPDATE department SET ? WHERE ?",
            [
                {
                    name:answer.Department_Name
                },
                {
                    id:answer.Department_id    
                }
            ],
            function(err, res){
                if (err) throw err;
                console.log(answer.Department_Name+' department was successfully added!' )
                let interval=setInterval(() => {start(); clearInterval(interval);}, 2000)
                
               
            }
        )
    })
}
function updateRole() {
    viewRole()
    inquirer.prompt([{
        name: 'Role_id',
        type: 'input',
        message: 'What role id would you like to update?'
    },
    {
        name: 'Role_Title',
        type: 'input',
        message: 'Please insert your updated role title.'
    }])
    .then(function(answer){
        let query = connection.query(
            "UPDATE role SET ? WHERE ?",
            [
                {
                    name:answer.Role_Title
                },
                {
                    id:answer.Role_id    
                }
            ],
            function(err, res){
                if (err) throw err;
                console.log(answer.Role_Title+' title was successfully added!' )
                let interval=setInterval(() => {start(); clearInterval(interval);}, 2000)
               
            }
        )
    })
}
function updateManager() {
    connection.query('select * from employee', function (err, result, fields) {
        if(err) throw err;
        console.table(result);
    })
    let interval = setInterval(()=>{
        inquirer.prompt([{
            name: 'Manager_Name',
            type: 'input',
            message: 'What manager would you like to choose?'
        },
        {
            name: 'Manager_id',
            type: 'input',
            message: 'What is its id? If not sure, please select "View Employee".'
        },
        {
            name: 'Employee_id',
            type: 'input',
            message: 'What is the id of the employee you would like to choose?'
        },
        {
            name: 'Employee_Name',
            type: 'input',
            message: 'What is the name of the employee you chose?'
        }])
        .then(function(answer){
            let query = connection.query(
                "UPDATE employee SET ? WHERE ?",
                [
                    {
                        manager_id:answer.Manager_id
                    },
                    {
                        id:answer.Employee_id    
                    }
                ],
                function(err, res){
                    if (err) throw err;
                    console.log(answer.Manager_Name+ ' is ' + answer.Employee_Name + "'s new Manager!" )
                    let interval=setInterval(() => {start(); clearInterval(interval);}, 2000)
                    
                   
                }
            )
        })
        clearInterval(interval)
    },2000)
}

function addRole() {
    inquirer.prompt({
        name: 'Role_Title',
        type: 'input',
        message: 'Which role do you want to add?'
    })
    .then(function(answer){
        console.log(answer.Role_Title)
        start()
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
        start()
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
        start()
    })   
}
function removeDepartment(){
    inquirer.prompt({
        name: 'Department_Name',
        type: 'list',
        message: 'What is the id of the department you would like to remove?',
    })
    .then(function(answer){
        let query = `delete from department where id = ${answer.Department_Name}`
        connection.query(query, function (err, result) {
            if(err) {
                throw err
            }
            console.log(result.affectedRows+'department with id '+answer.Department_Name+' was successfully deleted!' )
            start()
        })
    })
}
function removeRole(){
    inquirer.prompt({
        name: 'Role_Title',
        type: 'input',
        message: 'What is the id of the role you would like to remove?',
    })
    .then(function(answer){
        let query = `delete from role where id = ${answer.Role_Title}`
        connection.query(query, function (err, result) {
            if(err) {
                throw err
            }
            console.log(result.affectedRows+'role with id '+answer.Role_Title+' was successfully deleted!' )
            start()
        })
    })
}
function removeEmployee(){
    inquirer.prompt({
        name: 'Employee_Name',
        type: 'input',
        message: 'What is the id of the employee you would like to remove?',
    })
    .then(function(answer){
        let query = `delete from employee where id = ${answer.Employee_Name}`
        connection.query(query, function (err, result) {
            if(err) {
                throw err
            }
            console.log(result.affectedRows+' employee with id '+answer.Employee_Name+' was successfully deleted!' )
            start()
        })
    })
}

function viewDepartment(){
    connection.query('select * from department', function (err, result, fields) {
        if(err) throw err;
        console.table(result);
        start()
    })
}
function viewRole(){
    connection.query('select * from role', function (err, result, fields) {
        if(err) throw err;
        console.table(result);
        start()
    })
}
function viewEmployee(){
    connection.query('select * from employee', function (err, result, fields) {
        if(err) throw err;
        console.table(result);
        start()
    })
}