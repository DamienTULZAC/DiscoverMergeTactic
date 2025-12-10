const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 7654;

// Autorise le front à accéder au back
app.use(cors({
    origin: "http://localhost:3000"
  }));
  
app.use(express.json());

const routes = require('./routes/routes.js');

app.use("/api/", routes);

app.listen(PORT, ()=>console.log(`backend up sur le port ${PORT}`));