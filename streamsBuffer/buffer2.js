
const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    const rstream = fs.createReadStream("streamsBuffer/buffer.txt")
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata)
    })
    rstream.on("end", () => {
        res.end()
    })
    rstream.on("error",()=>{
        console.log(err)
        res.end("File will be uploaded soon")
    })
});

server.listen(8000, "127.0.0.1",()=>{
    console.log ("complete")
})