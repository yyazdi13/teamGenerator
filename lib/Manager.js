const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    prompt(){
        return inquirer.prompt([
            {
                message: 'What is your office number',
                name: 'officeNum'
            }
        ]).then(answers => {
            this.officeNumber = answers.officeNumber;
        })
    }
    getRole(role){
        role = "Manager";
        return role;
    }
    getOfficeNumber(officeNumber){
        return this.officeNumber
    }
}

module.exports = Manager;