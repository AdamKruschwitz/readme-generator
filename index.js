// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Input the project title: "
    },
    {
        name: "description",
        message: "Input the project description: "
    },
    {
        name: "installation",
        message: "Input the installation instructions: "
    },
    {
        name: "usage",
        message: "Input the usage information: "
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license: ",
        choices: [
            "Apache",
            "Boost",
            "BSD",
            "Creative Commons",
            "Eclipse Public",
            "GNU",
            "IBM",
            "MIT",
            "Mozilla",
            "Perl"
        ]
    },
    {
        name: "tests",
        message: "Input your programs tests: "
    }
];

const contributorQuestions = [
    {
        name: "contributorName",
        message: "Input a contributor name: "
    },
    {
        name: "contributorGitHub",
        message: "Input a contributor GitHub: "
    },
    {
        name: "contributorLinkedIn",
        message: "Input a contributor LinkedIn"
    },
    {
        type: "confirm",
        name: "askAgain",
        message: "are there any other contributors? (hit Enter for Yes)",
        default: true
    }
]

var responses = {};
responses.contributors = [];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, 
    (err) => {
        err ? console.log(err) : console.log(`successfully wrote to ${fileName}`);
    });
}

function askForContributors() {
    inquirer.prompt(contributorQuestions).then((contributor) => {
        responses.contributors.push(contributor);
        if(contributor.askAgain) askForContributor();
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        responses = answers;
        responses.contributors = [];
        askForContributors();
    });
}

// Function call to initialize app
// init();
console.log(askForContributors());