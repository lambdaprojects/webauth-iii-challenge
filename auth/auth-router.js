const express = require("express");
const router = express.Router();
const UserHelper = require("../user/user-model.js");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    let addUser = await UserHelper.add(user);
    res.status(201).json(addUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;

    let user = await UserHelper.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome! ${user.username}`, token });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;
