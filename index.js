// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// create a data object to hold the answers
let data = {};
// create an array of questions for user input
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

// function that prompts the user for data using inquirer method,
// passes the questions array to the function, assigns the answers
// to the 'data' variable, then calls the writeToFile function with
// 'README.md' and 'data' as it's arguments.
const getProjectData = questions => {
    console.log(`
====================
Generate a README.md
====================
`);

    inquirer.prompt(questions)
        .then(answers => {
            data = generateMarkdown(answers);
            writeToFile("./dist/README.md", data);
        });
}

// function that writes to the README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log("ERROR: " + err);
        }
    
        console.log("Done");
    });
};

// function that initializes the app
const init = () => {
    getProjectData(questions);
}

// Function call to initialize app
init();