const genHTML = (employees) => {
  console.log(employees);
  const html = [];

  const genMGR = (manager) => {
    let mgrHTML = `
  
  <div class="card" style="width: 20em">
    <div class="card-header text-center"><strong> ${manager.name} </strong><br>
      <div>Manager</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id} </li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a><span></li>  
            <li class="list-group-item">Number: ${manager.officeNum}</li>
          </ul>
        </div>
      </div>
  </div>
  `;
    html.push(mgrHTML);
  };

  const genENG = (engineer) => {
    let engHTML = `
  
  <div class="card" style="width: 20em">
    <div class="card-header text-center"><strong> ${engineer.name} </strong><br>
      <div>Engineer</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id} </li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a><span></li> 
            <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
          </ul>
        </div>
      </div>
  </div>
  `;
    html.push(engHTML);
  };

  const genINT = (intern) => {
    let intHTML = `
  
  <div class="card" style="width: 20em">
    <div class="card-header text-center"><strong> ${intern.name} </strong><br>
      <div>Intern</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a><span></li> 
            <li class="list-group-item">School: ${intern.school} </li>
          </ul>
        </div>
      </div>
  </div> 
  `;
    html.push(intHTML);
  };

  for (i = 0; i < employees.length; i++) {
    if (employees[i].getRole() === "Manager") {
      genMGR(employees[i]);
    } else if (employees[i].getRole() === "Engineer") {
      genENG(employees[i]);
    } else if (employees[i].getRole() === "Intern") {
      genINT(employees[i]);
    }
  }
  return html.join("");
};

module.exports = (employees) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css" />
    <title>Team Awesome</title>
  </head>
  <body>
    <div class="header">
      <h1 class="display-1 text-center main-header">Team Awesome</h1>
      </div>
      <main class="d-flex justify-content-evenly row"> ${genHTML(
        employees
      )} </main>
      </div>
      </div>
  </body>
  </html>
  `;
};
