const fs = require('fs')
const http=require ("http")

const server = http.createServer((req,res)=>{
    const rstream=fs.createReadStream("jsonfile.txt");
    rstream.pipe(res);
})

server.listen(8000,"127.0.0.1")