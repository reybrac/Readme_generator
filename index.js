// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const {message} = require('statuses');
// TODO: Create an array of questions for user input
//const questions = [];
inquirer.prompt(
    [
        {
            type: 'input',
            message:"What is the project title?",
            name: 'title',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'how do you install your app?',
            name: 'installation',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'instruction to be followed?',
            name: 'instructions',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'any credits?',
            name: 'credits',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'how do you use your app?',
            name: 'usage',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            // list of license
            type: 'list',
            message:'what license did you use?',
            name: 'license',
            choices:["The MIT license", "The GPL license", "Apache license", "GNU license", "N/A"],

            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'Github username?',
            name: 'git',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
    const template = `# ${title}
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Credits](#credits)
    * [License]{#license}
    * Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### instructions
    ${instructions}
    ## Credits
    ${credit}
    ## License
    ${license}

    * Contact
    * GitHub :${git}
    * Linkedin :${linkedin}
    * E-mail :${email}`;
    //Function to create our readme using fs
    createNewFile(title, template);
}
);

function createNewFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your REAME has been generated');
    })
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
