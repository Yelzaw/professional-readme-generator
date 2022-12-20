// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateREADME = ({github, email, project, description, license, install, runtest, usage, contribution}) =>{
   const contentReadme = 
   `# ${project} <Your-Project-Title>

   ## Description
   
   ${description}
   
   ## Table of Contents
   
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [License](#license)
   - [Tests](#tests)
   - [Questions](#questions)

   ## Installation
   
   To run application need to install necessary dependencies and please run the following commands.
   
   ${install}
   
   ## Usage

   ${usage}

   ## Contributing

   ${contribution}
   
   ## License

   This project is licensed under the ${license}.
    
   ## Tests
   
   To run the test, run the following command
   ${runtest}
   
   ## Questions

   If you have any questions about the repo, open an issue or contact me directly at [${email}]. You can find my works at [${github}](https://github.com/${github}).
   `


   return contentReadme;
  }

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }

// // TODO: Create a function to initialize app
function init() {
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
         type: 'list',
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
      fs.writeFile('README.md', generateREADME(answers), (err) =>
      err ? console.log(err) : console.log('Generating README.MD ....')
      );
   })
}

// // Function call to initialize app
init();
