const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (data) =>
`
# ***${data.name}***

## Table of Contents
1. [Project description](#Project-description)
2. [Istallation instruction](#Installaton-instructions)
3. [Usage information](#Usage-information)
4. [Contribution guidelines](#Contribution-guidelines)
5. [Test instructions](#Test-instructions)
6. [License](#License)
7. [Questions](#Questions)

## Project description: 
${data.description}

## Installation instructions: 
${data.installation}
## Usage information: 
${data.usage}
## Contribution guidelines: 
${data.contribution}
## Test instructions: 
${data.test}
## License: 
${data.license}
## Questions: 
https://www.github.com/${data.github}

Reach me at ${data.email} for additional questions
`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter project title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe usage of project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contributions to project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'Mozilla']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter you Github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ])
    .then((data) => {
        
        const readMePageContent = generateReadme(data);
        fs.writeFile(`README.md`, readMePageContent, (err) =>
        err ? console.log(err) : console.log('successfully created README.md')
        );
    });

    