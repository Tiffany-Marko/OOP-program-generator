const Manager = require("../Manager");
test("managerClass",()=>{
    const managerInstance = new Manager("name","id","email","officeNumber")
    expect(managerInstance.getRole()).toBe("Manager")
})