const inquirer = require('inquirer');
console.log(inquirer);

inquirer
  .prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'WHAT IS YOUR NAME?'
    },
    {
      type: 'input',
      name: 'job', 
      message: 'WHAT IS YOUR JOB?'
    }
  ])
  .then(answers => console.log(answers));
  
// const fs = require('fs'); 
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('PORTFOLIO COMPLETE!! CHECK THE INDEX.HTML!!');
// });