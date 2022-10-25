const inquirer = require("inquirer");
const fs = require("fs");

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
    answers.manager =manager; 

    answers.interns =[];
    answers.engineers =[];
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
    console.log(answers)
    // fs.writeFile("index.html", htmlTemplate(answers), (err) => {
    //     console.log(err)
    // })



}
main()




