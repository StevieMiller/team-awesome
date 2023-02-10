const Manager = require("../lib/Manager");

describe("manager", () => {
  it("should create an object", () => {
    const manager = new Manager("Stevie Miller", 1234, "stevie@company.com");
    expect(manager.name).toBe("Stevie Miller");
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe("stevie@company.com");
  });
});
