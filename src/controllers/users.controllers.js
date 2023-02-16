const UserServices = require("../services/user.services");

const createConversation = (req, res) => {
  try {
    const { title } = req.body;
    const { id } = req.params;
    const field = { title, created_by: Number(id) };
    console.log(field);
    const result = UserServices.createConversation(field);
    res.status(201).json({ message: "conversation created" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  createConversation,
};
