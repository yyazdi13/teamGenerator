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
        engineer.prompt();
    }

    else if (employ.role === "intern"){
        intern.prompt();
    }

    else if (employ.role === "manager"){
        manage.prompt();
    }
})

.then(function(){
    fs.writeFile("team.html", `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    <div style="background: blue; width: 200px; height: 200px;">
        <h1>${employ.name}</h1>
        <h2>
        ${employ.email}
        </h2>
        <h2>
        ${employ.role}
        </h2>
        <h3>
        ${engineer.github}
        </h3>
    </div>    
    </body>
    </html>`, function(err){
        if (err){
            throw err;
        }
    })
});
