const { conversations } = require("../models");

class ConversationServices {
  static async add(title, createdBy) {
    try {
      const result = await conversations.create({
        title,
        created_by: createdBy,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = conversations.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationServices;
