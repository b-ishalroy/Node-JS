const express = require("express");
const app = express();
let port = 8000;
const sendmail=require("./controllers/sendmail")


app.get("/", (req, res) => {
    res.send("I am a server")
});


app.get("/sendmail", sendmail);

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`I am live on 8000 Server ${port}`)
        })
    } catch (error) {

    }
}

start();