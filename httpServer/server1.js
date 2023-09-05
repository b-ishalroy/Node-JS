const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url == "/") {
        res.end("Hello from the other sides Bishal")
    }

    else if (req.url == "/about") {
        fs.readFile("api/api.json", "utf-8", (err, data) => {
            console.log(data)
            res.end(data)
        })
    }

    else {
        res.end("THANK YOU, --bishal")
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000")
})



