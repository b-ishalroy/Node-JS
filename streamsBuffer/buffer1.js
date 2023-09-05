// // handle stream events -> data,end & error 
// const fs = require("fs");
// const http = require("http");


// const server = http.createServer();

// server.on('request', (req, res) => {
//     var fs = require("fs")
//     fs.readFile("buffer.txt", (data, err) => {
//         if (err) return console.error(err)
//         res.end(data.toString())
//     });

// })

// server.listen(8000, "127.0.0.1", () => {
//     console.log("start")
// })






const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");


// 1st method 

// const server = http.createServer();

// server.on('request', (req, res) => {
//     var fs = require("fs")
//     fs.readFile("buffer.txt",(err,data) => {
//         if (err) return console.error(err);
//         res.end(data.toString());
//     });

// })

// server.listen(8000, "127.0.0.1", () => {
//     console.log("start")
// })




// 2nd method 
// this is streaming method 

// reading from a stream 
// create readeble Stream 
// handle steam event -> data, end, error 
const server = http.createServer();
server.on('request', (req, res) => {
    const rstream = fs.createReadStream("adi.txt");
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata)
    })
    rstream.on("end", () => {
        res.end()
    })
})

server.listen(8000, "127.0.0.1", () => {
    console.log("start")
})






