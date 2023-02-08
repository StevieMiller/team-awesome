function genHTML(employees) {
  return `<h1>hello world</h1>
  <p>Name: ${employees[0].name}<p>
  <p>Role: ${employees[0].getRole()}<p>
  <p>ID: ${employees[0].id}<p>
  <p>Email: ${employees[0].email}<p>
  <p>Office Number: ${employees[0].officeNum}<p>
  `
}

module.exports = genHTML;