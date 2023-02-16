const Router = require("express");
const router = Router();
const { createConversation } = require("../controllers/users.controllers");

router.post("/users/:id/newConversation", createConversation);

module.exports = router;
