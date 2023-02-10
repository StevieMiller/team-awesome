const Engineer = require("../lib/Engineer");

describe("engineer", () => {
  it("should create an object", () => {
    const engineer = new Engineer("Christian Schaffer", 2345, "chrisschaf182");
    expect(engineer.name).toBe("Christian Schaffer");
    expect(engineer.id).toBe(2345);
    expect(engineer.email).toBe("chrisschaf182");
  });
});
