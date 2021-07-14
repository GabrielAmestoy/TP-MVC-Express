const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const indexRouter = require("./routes/main");

app.use("/", indexRouter);
app.listen(port, ( ) =>{
    console.log("Servidor funcionando en puerto 3000");
});

// app.get("/", (req ,res) => res.sendFile(path.join(__dirname, "views", "home.html")));
