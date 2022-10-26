// const { default: test } = require("node:test");
// const index= require("index")
const intern= 
` <h2>Intern Info</h2>
    <p>Name:intern</p>
    <p>ID:id</p>
    <p>Email:  <a href= "mailto:email">email</a> </p>
    <p>School:school</p>`
const html= ` <h2>Engineer Info</h2>
<p>Name:engineer</p>
<p>ID:engineer</p>
<p>Email:  <a href= "mailto:email">email</a> </p>
<p>Github:<a href = "https://github.com/engineer">github</a></p>`
// const { default: test } = require("node:test")

test("example.test",()=>{
    expect(html).toBe(html) 
})
test("sample.test2",()=>{
    expect(intern).toBe(intern)
})