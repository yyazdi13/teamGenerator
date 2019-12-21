const Employee = require('../lib/Employee');
const inquirer = require('inquirer');
class Engineer extends Employee{
constructor(name,id,email,github){
    super(name,id,email);
    this.github = github;
}

prompt(){
    return inquirer.prompt([
        {
            message: 'What is your github username',
            name: 'github'
        }
    ]).then(answers => {
        this.github = answers.github;
    })
}
getRole(role){
    role = "Engineer";
    return role;
}

getGithub(github){
return this.github;
}

}
module.exports = Engineer;