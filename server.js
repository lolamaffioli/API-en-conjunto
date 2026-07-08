const express = require("express");
const app = express();

app.use(express.json());
const authRoutes = require("./src/routes/auth.routes.js");

app.use("/auth", authRoutes);

const historyRoutes = require("./src/routes/history.routes.js");

app.listen(3000, () => {
    console.log("Servidor iniciado");
});