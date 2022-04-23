const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection.js');

// Present user with options

nextPrompt();

function nextPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: [
                "View Departments", 
                "View Roles", 
                "View Employees", 
                "Add Department", 
                "Add Role", 
                "Add Employee", 
                "Update Employee Role",
            ],
        }
    ]).then(res => {
        switch(res.action) {
            case "View Departments":
                viewDepartments();
                break;
            case 'View Roles':
                viewRoles();
                break;
            case 'View Employees':
                viewEmployees();
                break;
            case 'Add Department':
                viewDepartments();
                break;
            case 'Add Role':
                viewDepartments();
                break;
            case 'Add Employee':
                viewDepartments();
                break;
            case 'Update Employee Role':
                viewDepartments();
                break;
            default:
                process.exit();

}
    })

}

// View all departments - READ - "SELECT * FROM [table_name]";
async function viewDepartments() {
    const departments = await db.query('SELECT * FROM department');

    console.table(departments);
};

//  View all roles
async function viewRoles() {
    const roles = await db.query('SELECT * FROM role');

    console.table(roles);
};

//  View all employees - READ - "SELECT * FROM [table_name]";
async function viewEmployees() {
    const employees = await db.query('SELECT * FROM employee');

    console.table(employees);
};

//  Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUES (value1, value2)";

async function createDepartment() {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'department_name',
            message: "Enter Department Name:",
        },
    ])
    .then((answer) => {
        let departmentList = ('INSERT INTO department (department_name) VALUES (?)');
        db.query(departmentList, answer.department_name, (err, res) => {
            if (err) throw err;
            console.log(
                "New Department Added!"
            )
        })
    })
}



//  Add a role - CREATE - "INSERT INTO [table_name] (col1, col2) VALUES (value1, value2)";

async function createRole() {
    //  SELECT the existing roles out of the `roles` table
    const departments = ('SELECT * FROM department');
    //  .map() the results from `roles` to question data for inquirer
    const choices = departments.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    })

    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "department_id",
            message: "Choose a department",
            choices: choices
        }
    ])
}

            //  THEN prompt the user for role information (inquirer)
            // Take the users answers and go INSERT them into the `roles` table 

//  Add an employee - CREATE - "INSERT INTO [table_name] (col1, col2) VALUES (value1, value2)";

//  Update an employee