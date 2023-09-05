const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "bishal")

console.log(text);
console.log('The content of the file is ');

console.log("Creating a new file is...");
fs.writeFileSync("rohan.txt", text);

fs.appendFileSync("rohan.txt", ' ' + 'What is your name')



// node js includes an addtional type of datatypes called buffer, buffer is mainly used to store binary data 
const buf_data = fs.readFileSync('rohan.txt')
console.log(buf_data)


fs.renameSync('rohan.txt','bishal.txt')

