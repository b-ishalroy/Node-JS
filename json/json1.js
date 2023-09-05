const fs = require("fs")

const biodata = {
    name: "Bishal",
    age: 25,
    channel: "bishal technical"
}

// console.log(biodata.channel)

const jsonData = JSON.stringify(biodata)
// console.log(jsonData)
const objData= JSON.parse(jsonData)
console.log(objData)

fs.writeFile("jsonfile.txt",jsonData,()=>{
    console.log("Done")
})

