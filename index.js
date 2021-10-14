// TODO: Include packages needed for this application

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
