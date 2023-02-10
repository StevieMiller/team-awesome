const Employee = require("../lib/Employee");

describe("employee", () => {
  it("should create an object", () => {
    const employee = new Employee("Stevie Miller", 1234, "stevie@company.com");
    expect(employee.name).toBe("Stevie Miller");
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe("stevie@company.com");
  });
});
