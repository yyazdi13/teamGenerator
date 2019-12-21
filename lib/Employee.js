const inquirer = require('inquirer');


class Employee {
    constructor(name,id,email,role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    promptUser(){
        return inquirer.prompt([
            {
                message: 'What is your name',
                name: 'name'
            },
            // {
            //     message: "What is your id",
            //     name: 'id'
            // },
            {
                message: 'what is your email',
                name: 'email'
            },
            {
                message: 'What is your role',
                name: 'role'
            }
        ]).then(answers => {
            this.name = answers.name;
            this.id = answers.id;
            this.email = answers.email;
            this.role = answers.role;
        })
    };

    getName(name){
        return this.name;
    }

    getId(id){
        return this.id;
    }

    getEmail(email){
        return this.email;
    }

    getRole(role){
        role = "Employee"
        return role;
    }
    
}
module.exports = Employee;
var employee = new Employee;
// employee.promptUser();