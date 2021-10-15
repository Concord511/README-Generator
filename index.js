// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a title for your project."
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter information on how to use your app."
    },
    {
        type: "list",
        name: "liscense",
        message: "Please select your license:",
        choices: [
            "l1",
            "l2",
            "l3",
            "l4"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines for this project."
    },
    {
        type: "input",
        name: "tests",
        message: "What steps were taken to test your project's functionality?"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email so you can be reached with any questions regarding your project."
    }
];

const getProjectData = questions => {
    console.log(`
====================
Generate a README.md
====================
`);

    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => fs.writeToFile(fileName, data);

// TODO: Create a function to initialize app
const init = () => {
    let answers = getProjectData(questions);
    let data = generateMarkdown(answers);
    writeToFile("README.md", data);
}

// Function call to initialize app
init();
