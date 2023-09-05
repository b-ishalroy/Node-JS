const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("Hey whatsapp")
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Hey bishal- start server")
});