const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routes/auth.router.js",
    "./src/models/users.js",
    "./src/routes/conversation.routes.js",
    "./src/models/conversations.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clon de chat en node js",
      version: "0.0.9",
      description: "API para aplicacion de mensajeria",
    },
  },
};

//vamos a generar una especificacion en json para nuestra documentacion

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  //generar la ruta de donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "aplication/json" });
    res.send(swaggerSpec);
  });
};

module.exports = swaggerDocs;
