// Here I required both inquirer and fs to run the script file
const inquirer = require('inquirerinquirer')
const fs = require('fs')

// variable that holds a list of all the licensing choices.
const licenseChoices = [
    {
        name: "Apache 2.0 License",
        url: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    },
    {
        name: "Boost Software License",
        url: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
    },
    {
        name: "BSD 3-Clause License",
        url: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
    },
    {
        name: "BSD 2-Clause License",
        url: "https://img.shields.io/badge/License-BSD_2--Clause-blue.svg"
    },
    {
        name: "Eclipse Public License 1.0",
        url: "https://img.shields.io/badge/License-EPL_1.0-red.svg"
    },
    {
        name: "GNU GPL v3",
        url: "https://img.shields.io/badge/License-GPLv3-blue.svg"
    },
    {
        name: "GNU GPL v2",
        url: "https://img.shields.io/badge/License-GPL_v2-blue.svg"
    },
    {
        name: "GNU AGPL v3",
        url: "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
    },
    {
        name: "GNU LGPL v3",
        url: "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
    },
    {
        name: "IBM Public License Version 1.0",
        url: "https://img.shields.io/badge/License-IPL_1.0-blue.svg"
    },
    {
        name: "ISC License (ISC)",
        url: "https://img.shields.io/badge/License-ISC-blue.svg"
    },
    {
        name: "The MIT License",
        url: "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    {
        name: "Mozilla Public License 2.0",
        url: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
    },
    {
        name: "The Perl License",
        url: "https://img.shields.io/badge/License-Perl-0298c3.svg"
    },
    {
        name: "SIL Open Font License 1.1",
        url: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg"
    },
]



// I then started a function that will run the Inquirer prompts
const askUser = () => {
    return inquirer.prompt([
        {
            //Title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',

        },
        {
            //Description
            type: 'input',
            name: 'description',
            message: 'Give us a brief description of your project.',
        },
        {
            //Installation
            type: 'input',
            name: 'installation',
            message: 'Give us some instructions on how we would install and run the project'
        },
        {
            //Usage
            type: 'input',
            name: 'usage',
            message: 'Provide some instructions on how an everyday user can utilize your work.'
        },
        {
            //License
            type: 'list',
            name: 'licenseType',
            message: 'Which licensae would you like to use?',
            choices: licenseChoices
        },
        {
            //Contributions
            type: 'input',
            name:'contributions',
            message: 'Please give us a list of all resources used for your project, and credit to other collaborators. '

        },
        {
            //Tests
            type: 'input',
            name: 'tests',
            message: 'Please explain all tests that a user should perform in your application'
        },
        {
            //Github
            type: 'input',
            name: 'github',
            message: 'Please provide a link to your GitHub'
        },
        {
            //Email
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
}

const generateReadMe = ({ title, description, installation, usage, license, contributions, tests, github, email }) => 
`
 # ${title}

 ## Description

 ${description}

 ## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributions](#contributions)
 - [Test](#tests)
 - [Questions](#questions)

 ## Installation

 ${installation}

 ## Usage

 ${usage}

 ## Contributions

 ${contributions}

 ## Tests

 ${tests}

 ## Questions
 
 If you have any questions about my work, please feel free to contect me at ${email} or [visit my Github](${github})
`


//Here I called our function
const runPrompt = () => {
    askUser()
    .then((answers) => fs.writeFileSync('READMETest.md', generateReadMe(answers)))
    .catch((err) => console.error(err));
}

runPrompt()