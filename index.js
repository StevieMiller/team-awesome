const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML')

let employeeArray = [];

// WHEN I am prompted for my team members and their information

const questions = [
  {
    type: "input",
    name: "name",
    message:
      "Enter employee name",
  },
  {
    type: "input",
    name: "id",
    message:
      "Enter employee ID",
  },
  {
    type: "input",
    name: "email",
    message:
      "Enter employee email",
  },
  {
    type: "list",
    name: "role",
    message:
      "Enter employee's role",
    choices: ["Manager", "Engineer", "Intern"]
  },
];

// init function prompts the questions and takes in the answers, then writes it to an HTML file
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('answers logged');
    let HTML = generateHTML(answers)
    fs.writeFile('index.html', HTML, (err) => {
      if (err)
      console.log(err)
      else
      console.log('HTML written successfully!');
    })
  })
}

// Function call to initialize app
init();