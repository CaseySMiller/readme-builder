// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const makeMD = require("./utils/generateMarkdown");

// Create an array of questions for user input
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
        message: "What is address of your video",
        name: "installVid"
    },
    {
        type: "input",
        message: "What is address of your video display image",
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
    // call write function here
    writeToFile('./output/README.md', response);
});



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, makeMD(data), (err) =>
    err ? console.error(err) : console.log('Success!')
);
};

