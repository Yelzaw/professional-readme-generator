// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateREADME = ({github, email, project, description, license, install, runtest, usage, contribution}) =>{
   const contentReadme = `user github is ${github}/n, user email is ${email}/n, The project name is ${project}/n, The description${description},/n ${license},/n ${install},/n ${runtest},/n ${usage},/n ${contribution}`;
   return contentReadme;
  }

inquirer
    .prompt([
        {
           type: 'input',
           name: 'github',
           message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
         },
         {
            type: 'input',
            name: 'project',
            message: "What is your project's name?",
         },
         {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
         },
         {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License 3.0', 'Eclipse Public License 2.0'],
         },
         {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install depedencies?',
         },
         {
            type: 'input',
            name: 'runtest',
            message: 'What command should be run to tun tests?',
         },
         {
            type: 'input',
            name: 'usage',
            message: 'What is does the user need to know about using the repo?',
         },
         {
            type: 'input',
            name: 'contribution',
            message: 'What is does the user need to know about contributing to the repo?',
         },
    ])
    .then((answers) => {
        // console.log(generateREADME(answers));
        fs.writeFile('readme.md', generateREADME(answers), (err) =>
        err ? console.log(err) : console.log('Generating README.MD ....')
    );
    })
// TODO: Create a function to write README file


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
