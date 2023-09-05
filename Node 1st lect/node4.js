// synchronous or blocking
// -- line by line execution 



// asynchronous or non blocking
// -- line by line excution not guarantee 
// callback will fire 
const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(data)
});
console.log(' This is a message')


fs.writeFile('adi.txt', "Today is a awsome day", (err) => {
    console.log("Files are created")
    console.log(err);
})


fs.mkdir("Chemistry", (err) => {
    console.log('Folder Created')
})

fs.writeFile("chemistry/first semester.txt", "Welcome to my coading college first semester", (err) => {
console.log("Chemistry file created")
})

fs.readFile("chemistry/first semester.txt", "utf-8",(err,data)=>{
    console.log(data)
    console.log(err)
})

fs.rename("chemistry/first semester.txt","chemistry/myfirst semester.txt",(err)=>{
    console.log("Replace name complete")
})