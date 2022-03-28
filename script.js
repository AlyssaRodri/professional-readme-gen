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
        }
    ])
}
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README