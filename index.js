const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const genHTML = require("./src/genHTML");

let employees = [];

// WHEN I am prompted for my team members and their information

const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter the employee's name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the employee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the employee's email",
  },
  {
    type: "list",
    name: "role",
    message: "Enter the employee's role",
    choices: ["Manager", "Engineer", "Intern"],
  },
];
const qsMgr = [
  {
    type: "input",
    name: "officeNum",
    message: "Enter the manager's office number.",
  },
];

const qsEng = [
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's GitHub username.",
  },
];

const qsInt = [
  {
    type: "input",
    name: "school",
    message: "Enter the school the intern is currently enrolled in.",
  },
];

// function that asks for another employee entry
function askAgain() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "again",
        message: "Would you like to add another employee?",
        choices: ["yes", "no"],
      },
    ])
    .then((answer) => {
      if (answer.again === "yes") {
        init();
      } else {
        let employeeRoster = genHTML(employees);
        fs.writeFile("index.html", employeeRoster, (err) => {
          if (err) console.log("err");
          else console.log("File written successfully!");
        });
      }
    });
}

// init function prompts the questions and takes in the answers, then writes it to an HTML file
function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.role === "Manager") {
      inquirer.prompt(qsMgr).then((managerInfo) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          managerInfo.officeNum
        );
        employees.push(manager);
        askAgain();
      });
    } else if (answers.role === "Engineer") {
      inquirer.prompt(qsEng).then((engineerInfo) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          engineerInfo.github
        );
        employees.push(engineer);
        askAgain();
      });
    } else if (answers.role === "Intern") {
      inquirer.prompt(qsInt).then((internInfo) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          internInfo.school
        );
        employees.push(intern);
        askAgain();
      });
    }
  });
}

// Function call to initialize app
init();
