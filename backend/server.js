const express = require("express");
const app = express();
const PORT = 7654;

app.get("/", (req, res) =>{
    res.send("Hello depuis le backend");
});

app.listen(PORT, ()=>console.log(`backend up sur le port ${PORT}`));