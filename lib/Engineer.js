const Employee = require('../lib/Employee');
class Engineer extends Employee{
constructor(name,id,email,github){
    super(name,id,email);
    this.github = github;
}

prompt(){
    return inquirer.prompt([
        {
            message: 'What is your github username',
            name: 'githubName'
        },
        {
            message: "What is your id",
            name: 'id'
        }
    ]).then(answers => {
        this.github = answers.github;
        this.role = role;
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