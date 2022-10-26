
const Engineer = require("../Engineer");
test("engineerClass",()=>{
    const engineerInstance = new Engineer("name","id","email","github")
    expect(engineerInstance.getRole()).toBe("Engineer")
})