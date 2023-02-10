const Intern = require("../lib/Intern");

describe("intern", () => {
  it("should create an object", () => {
    const intern = new Intern("Ryan Twomey", 3456, "NMSU");
    expect(intern.name).toBe("Ryan Twomey");
    expect(intern.id).toBe(3456);
    expect(intern.email).toBe("NMSU");
  });
});
