const fs = require("fs")
const http = require("http")

server = http.createServer((req, res) => {
    if (req.url == "/") {
        const rstream = fs.createReadStream("ap.txt")
        rstream.on("data", (chunkdata) => {
            res.write(chunkdata)
        })
        rstream.on("end", () => {
            res.end()
        })
    }

    else {
        const rstream = fs.createReadStream("broy.txt")
        rstream.on("data", (chunkdata) => {
            res.write(chunkdata)
        })
        rstream.on("end", (chunkdata) => {
            res.end()
        })
    }
})

server.listen(8000,"127.0.0.1")