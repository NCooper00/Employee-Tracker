const connection = require('./connections');

class DB{
    constructor(connection) {
        this.connection = connection
    }
    
// DEPARTMENTS
    viewAllDepartments(){
        console.log('----------------')
        return this.connection.promise().query(`SELECT * FROM department`)
    }

// ROLES
    viewAllRoles() {
        return this.connection.promise().query(
            `SELECT
                *
            FROM
                role
            LEFT JOIN
                department ON role.department_id = department.id`
        )
    }

// EMPLOYEES
    viewAllEmployees() {
        return this.connection.promise().query(
            `SELECT
                employee.id,
                employee.first_name,
                employee.last_name,
                role.title,
                role.salary,
                concat(manager.first_name, ' ', manager.last_name) AS manager
            FROM
                employee
            LEFT JOIN
                role ON employee.role_id = role.id
            LEFT JOIN
                employee manager ON manager.id = employee.manager_id`
        )
    }

// ADD DEPT
    addDepartment(department){
        return this.connection.promise().query(
            `INSERT INTO 
                department
            SET 
                ?`, department
        )
    }

// ADD ROLE
    addRole(role){
        return this.connection.promise().query(
            `INSERT INTO
                role
            SET
                ?;`, role
        )
    }

// ADD EMPLOYEE
    addEmployee(employee){
        return this.connection.promise().query(
            `INSERT INTO
                employee
            SET
                ?;`, employee
        )
    }

// UPDATE ROLE
    updateRole( employeeId, roleId ){
        return this.connection.promise().query(
            `UPDATE
                employee
            SET
                role_id = ?
            WHERE
                id = ?`, [roleId, employeeId]
            
        )
    }

// SELECT MANAGER
    managerSelect(){
        return this.connection.promise().query(
            `SELECT
                *
            FROM
                employee
            WHERE
                manager_id IS NULL`
        )
    }
};


module.exports = new DB(connection)