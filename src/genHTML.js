const genHTML = (employees) => {
  console.log(employees);
const html = [];

const genMGR = (manager) => {
  let mgrHTML = `
  <p>Manager: ${manager.name}</p>
  <p>ID: ${manager.id}</p>
  <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>  
  <p>Number: ${manager.officeNum}</p>
  `;
  html.push(mgrHTML)
}

const genENG = (engineer) => {
  let engHTML = `
  <p>Engineer: ${engineer.name}</p>
  <p>ID: ${engineer.id}</p>
  <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p> 
  <p>Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
  `; 
  html.push(engHTML);
}

const genINT = (intern) => {
  let intHTML = `
  
  <p>Intern: ${intern.name}</p>
  <p>ID: ${intern.id}</p>
  <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p> 
  <p>School: ${intern.school}</p>
  `;
  html.push(intHTML);
};

for (i = 0; i < employees.length; i++) {
  if (employees[i].getRole() === "Manager") {
      genMGR(employees[i])
  } else if (employees[i].getRole() === "Engineer") {
      genENG(employees[i])
  } else if (employees[i].getRole() === "Intern") {
      genINT(employees[i])
  }
}
return html.join('');
}

module.exports = genHTML;