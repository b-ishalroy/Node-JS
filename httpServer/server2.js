const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("What your name")
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Hey Bishal I am the output")
})