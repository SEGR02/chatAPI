const authRoutes = require("./auth.router");
const conversationsRoutes = require("./conversation.routes");
const usersRoutes = require('./users.routes');

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/conversations", conversationsRoutes);
};

module.exports = routerApi;
