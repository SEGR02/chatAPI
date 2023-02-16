const models = require("../models");

class UserServices {
  static async createConversation(field) {
    try {
      const createConversation = models.conversations.create(field); //title and id of creator
      const addParticipant = models.participants.create({
        user_id: 3,
        conversation_id: 1,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
