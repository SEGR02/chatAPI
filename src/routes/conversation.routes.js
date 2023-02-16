const Router = require("express");
const router = Router();
const error = require("../middlewares/error.middleware");
const {
  addConversation,
  getAllConversations,
} = require("../controllers/conversation.controller");

/**
 * @openapi
 * /api/v1/conversations:
 *   get:
 *     summary: get all conversations
 *     tags:
 *       - Conversations
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getAllUsers'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation error
 */

router.get("/", getAllConversations, error);
router.post("/", addConversation, error);

module.exports = router;
