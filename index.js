// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const makeMD = require("./utils/generateMarkdown");
console.log(makeMD);

// TODO: Create an array of questions for user input
const questions = {};
inquirer
.prompt([
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project.",
        name: "descr"
    },
    {
        type: "input",
        message: "Describe the install process.",
        name: "install"
    },
    {
        type: "input",
        message: "What is address of the installation video",
        name: "installVid"
    },
    {
        type: "input",
        message: "What is address of the installation video display image",
        name: "installImg"
    },
    {
        type: "input",
        message: "What is address of the screenshot",
        name: "screenShot"
    },
    {
        type: "input",
        message: "What is the usage case?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the guidelines for contributions?",
        name: "contrib"
    },
    {
        type: "input",
        message: "What are the instructions for testing?",
        name: "testInstr"
    },
    {
        type: "list",
        message: "What license applies to the project",
        name: "license",
        choices: [
            "Mit License",
            "GNU GPLvl3"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "gitUsr"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
])
.then ( (response) => {
    console.log(response);
    // send response data to questions object
    // Object.assign(questions, response);

    // call write function here
    writeToFile('README.md', response);

    // console.log(licenseBadge);
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, makeMD(data), (err) =>
    err ? console.error(err) : console.log('Success!')
);
};

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
