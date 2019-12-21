const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    prompt(){
        return inquirer.prompt([
            {
                message: 'What is your school name',
                name: 'school'
            }
        ]).then(answers => {
            this.school = answers.school;
        })
    }

    getRole(role){
        role = "Intern";
        return role;
    }
    
    getSchool(school){
        return this.school;
    }
}

module.exports = Intern;