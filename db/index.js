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
                role`
        )
    }

// EMPLOYEES
    viewAllEmployees() {
        return this.connection.promise().query(
            `SELECT
                *
            FROM
                employee`
        )
    }

// ADD DEPT
    addDepartment(department){
        return this.connection.promise().query(
            `INSERT INTO 
                department
            SET 
                ?;`, department
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