const express = require("express");
const server = express();
const router = require("./routes/index");
const { conn } = require("./DB_CONNECTION");
const morgan = require("morgan");
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use("/rickandmorty", router);
server.use(morgan("dev"));

conn
  .sync({ force: false }) // Cambia a true si deseas que las tablas se vuelvan a crear cada vez que se reinicia el servidor
  .then(() => {
    console.log("Conexion a la base de datos exitosa");
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
