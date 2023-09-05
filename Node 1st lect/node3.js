const fs= require('fs');
let textfs=fs.writeFileSync('broy.txt','gdyg')
console.log(textfs)

fs.writeFile('ap.txt','Thank you',(err,data)=>
{
    console.log(err,data)
})


// new folder create 
// fs.mkdirSync('subject')
fs.writeFileSync("subject/bio.txt","Welcome to biology")

let fileread=fs.readFileSync("subject/bio.txt",'utf-8')
console.log(fileread)

