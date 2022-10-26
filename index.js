const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

async function main() {
    let answers = {};
    const manager = await inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is your employees ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your employee email address?",

        },
        {
            type: "input",
            name: "office",
            message: "What is your office number?",
        },

    ]);
    answers.manager = manager;

    answers.interns = [];
    answers.engineers = [];
    let nextOption = await inquirer.prompt({
        type: "list",
        name: "add",
        message: "Choose your next option?",
        choices: ["add an intern", "add an engineer", "finish and display my team"],
    });
    console.log(nextOption);
    while (nextOption.add != "finish and display my team") {
        let data;
        if (nextOption.add == "add an intern") {
            data = await inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your name?",
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your id?",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your email address?",
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your school?",
                },]);
            answers.interns.push(data);
        }
        else if (nextOption.add == "add an engineer") {
            data = await inquirer.prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is your name?",
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is your id?",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your email address?",
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is your Github username?",
                },]);
            answers.engineers.push(data);
        }

        nextOption = await inquirer.prompt({
            type: "list",
            name: "add",
            message: "Choose your next option?",
            choices: ["add an intern", "add an engineer", "finish and display my team"],
        });


    }
    function renderEngineers(){
        return answers.engineers.map(function(engineer){
            const engineerInstance = new Engineer(engineer.engineerName,engineer.engineerId,engineer.engineerEmail,engineer.engineerGithub)
            return ` <h2>Engineer Info</h2>
            <p>Name:${engineerInstance.getName()}</p>
            <p>ID:${engineerInstance.getId()}</p>
            <p>Email:  <a href= "mailto:${engineerInstance.getEmail()}">${engineerInstance.getEmail()}</a> </p>
            <p>Github:<a href = "https://github.com/${engineerInstance.getGithub()}">${engineerInstance.getGithub()}</a></p>`
        })
    }
    function renderInterns(){
        return answers.interns.map(function(intern){
            const internInstance = new Intern(intern.internName,intern.internId,intern.internEmail,intern.internSchool)
            return ` <h2>Intern Info</h2>
            <p>Name:${internInstance.getName()}</p>
            <p>ID:${internInstance.getId()}</p>
            <p>Email:  <a href= "mailto:${internInstance.getEmail()}">${internInstance.getEmail()}</a> </p>
            <p>School:${internInstance.getSchool()}</p>`
        })
    }
    console.log(answers)

    const managerInstance = new Manager(answers.manager.name, answers.manager.id, answers.manager.email,
        answers.manager.office)
        console.log(managerInstance.getEmail())


    const HTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div >
        <h2>Manager Info</h2>
        <p>Name:${managerInstance.getName()}</p>
        <p>ID:${managerInstance.getId()}</p>
        <p>Email:  <a href= "mailto:${managerInstance.getEmail()}">${managerInstance.getEmail()}</a> </p>
        <p>Office:${answers.manager.office}</p>
        
        

    </div>
    <div>
    ${renderInterns()}
    </div> 
    <div>
    ${renderEngineers()}
    </div>
    
</body>
</html>
    
    `
    fs.writeFile("index.html",HTML, (err) => {
        console.log(err)
    })



}
main()

// module.exports=index


