
const Employee = require("../Employee");
test("employeeClass",()=>{
    const employeeInstance = new Employee("name","id","email")
    expect(employeeInstance.getRole()).toBe("Employee")
})