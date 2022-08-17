// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = []
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'Problem',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'Reason',
            message: 'Why did you build this project',
        },
        {
            type: 'input',
            name: 'Knowledge',
            message: 'What did you learn?',
        },
        {
            type: 'input',
            name: 'Unique',
            message: 'What makes your project stand out?',
        },
    
])
.then((answers) => {
    
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
