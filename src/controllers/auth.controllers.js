const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailer");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const { password } = user;
    const passwordEncrypt = await bcrypt.hash(password, 10);
    user.password = passwordEncrypt;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "ian.rosas@academlo.com",
        subjetc: "Email confirmation",
        html: "<h1>Bienvenido a la mejor app de chat creada por mi</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blanc'> enlace </a>",
      });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    next(error);
    // console.log(error);
    // res.status(400).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res
        .status(400)
        .json({ error: "Missing data", message: "Not email provided" });
    }
    if (!password) {
      res
        .status(400)
        .json({ error: "Missing data", message: "Not password provided" });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { firstname, id, email, lastname } = result.user;
      const userData = { firstname, id, email, lastname };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else if (result.correctEmail == false) {
      res.status(400).json({ message: "incorrect email" });
    } else {
      res.status(400).json({ message: "incorrect password" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
