const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (data) =>

`#${data.name}

${data.license} ${data.badge}

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
This application is covered under the ${data.license} license.
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
            message: 'Describe usage of your project'
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
            choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'GNU', 'IBM', 'ISC', 'Mozilla']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter you Github username',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ])
    .then((data) => {
        
        
        switch (data.license) {
            case 'MIT':
                data.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
              break;
            case 'Apache':
                data.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
              break;
            case 'boost':
                data.badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
              break;
            case 'Eclipse':
                data.badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
              break;
            case 'GNU':
                data.badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
              break;
            case 'IBM':
                data.badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
              break;
            case 'ISC':
                data.badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
              break;
            case 'Mozilla':
                data.badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
              break;
            default:
              console.log('Select a license!');
          }
          
        
        const readMePageContent = generateReadme(data);
        fs.writeFile(`${data.name}.md`, readMePageContent, (err) =>
        err ? console.log(err) : console.log('successfully created README.md')
        );
    });

  