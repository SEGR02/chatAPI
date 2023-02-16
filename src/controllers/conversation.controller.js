const ConversationServices = require("../services/conversation.services");
const ParticipantServices = require("../services/participant.services");

const addConversation = async (req, res) => {
  try {
    const { title, createdBy, participant } = req.body;
    if (!title || !createdBy || !participant) {
      return res.status(400).json({ message: "missing required fields" });
    }
    const conversation = await ConversationServices.add(title, createdBy);
    if (conversation) {
      const { id } = conversation;
      await ParticipantServices.add(id, createdBy);
      await ParticipantServices.add(id, participant);
      res.status(201).json({ message: "conversation created" });
    }
  } catch (error) {
    next(error);
  }
};

const getAllConversations = async (req, res, next) => {
  try {
    const result = await ConversationServices.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addConversation,
  getAllConversations,
};

// ! const conversation = await res.status(201).json(result);
// * const conversation = await res.status(201).json(result);
