// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
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
    },
    {
        name: "email",
        message: "Input your email: "
    }
];

// Questions asked recursively.
const contributorQuestions = [
    {
        name: "name",
        message: "Input a contributor name: "
    },
    {
        name: "gitHub",
        message: "Input a contributor GitHub: "
    },
    {
        name: "linkedIn",
        message: "Input a contributor LinkedIn"
    },
    {
        type: "confirm",
        name: "askAgain",
        message: "are there any other contributors? (hit Enter for Yes)",
        default: true
    }
]

// Global function used to track responses across multiple inquirer prompts
var responses = {};

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, 
    (err) => {
        err ? console.log(err) : console.log(`successfully wrote to ${fileName}`);
    });
}

// Asynchronous function which gets the contributors
getContributors = async () => {

    // encapsulated recursive function. returns a promise if more contributors are to be added, continuing the promise chain.
    const askForContributors = async () => {
        await inquirer.prompt(contributorQuestions).then(contributor => {
            responses.contributors.push(contributor);
            if(contributor.askAgain) return askForContributors();
            return true;
        });
    }
    return askForContributors();
}


// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        responses = answers;
        responses.contributors = [];
        // let contributors = new Promise(_askForContributors);
        // After asking for all the contributors, generate the markdown and write the file
        // Very much looking for feedback on this way of using promises. is there a cleaner way to do this?
        getContributors().then( () => writeToFile("README.md", markdown(responses) ) );
    });
}

// Function call to initialize app
// console.log(inquirer.prompt({name:"none", message:"test"}));
init();