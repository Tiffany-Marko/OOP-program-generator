const Intern = require("../Intern");
test("internClass",()=>{
    const internInstance = new Intern("name","id","email","school")
    expect(internInstance.getRole()).toBe("Intern")
})