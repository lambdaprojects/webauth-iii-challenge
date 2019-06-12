const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    //let addUser = await URLSe
  } catch (error) {}
});
