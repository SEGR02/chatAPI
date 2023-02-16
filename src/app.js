const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
// const initModels = require("./models/init.models");
const authRoutes = require("./routes/auth.router");
const usersRoutes = require("./routes/users.routes");
const routerApi = require("./routes");
const transporter = require("./utils/mailer");
const error = require("./middlewares/error.middleware");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//verificar transporter si funciona se puede borrar

// transporter
//   .verify() // devuelve una promesa y la resolvemos con .then o .catch
//   .then(() => console.log("Transported ready"))
//   .catch((error) => console.log(error));

// const sendEmail = async () => {
//   await transporter.sendMail({
//     from: "laloca@gmail.com",
//     to: "genesis262002@gmail.com",
//     subject: "Prueba de nodemailer",
//     text: "Hola nodemailer sebas",
//     html: "<h1>hola nodemailer<h1/>",
//   });
// };

// sendEmail();

// app.use("/api/v1", authRoutes);
// app.use("/api/v1", usersRoutes);

routerApi(app);
app.use(error);

module.exports = app;
