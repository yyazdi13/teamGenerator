const Employee = require('../lib/Employee');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const fs = require('fs');
const inquirer = require('inquirer');


var employ = new Employee;
var engineer = new Engineer;
var intern = new Intern;
var manage = new Manager;
employ.promptUser()
.then(function(){
    if(employ.role === "engineer"){
        engineer.prompt().then(function(){
            console.log(engineer.github);
        })
    }

    else if (employ.role === "intern"){
        intern.prompt().then(function(){
            console.log(intern.school);
        });
    }

    else if (employ.role === "manager"){
        manage.prompt().then(function(){
            console.log(manage.officeNumber);
        });
    }
})

.then(function(){
    fs.appendFileSync("team.html", `
    <div>
        <h2>${employ.name}</h1>
        <h2>${employ.email}</h2>
        <h2>${employ.role}</h2>
        <h2>${engineer.github || intern.school || manage.officeNumber}</h2>
    </div>    
    </body>
    </html>`, function(err){
        if (err){
            throw err;
        }
    })
})

