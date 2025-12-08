const express = require("express");
const app = express();
const PORT = 7654;

app.use(express.json());

const routes = require('./routes/routes.js');

app.use("/api/", routes);

app.listen(PORT, ()=>console.log(`backend up sur le port ${PORT}`));