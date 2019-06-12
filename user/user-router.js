const router = require("express").Router();

const UserHelper = require("./user-model.js");
const restricted = require("../auth/restricted.js");
//const checkRole = require('../auth/checkRole.js');

router.get("/", restricted, async (req, res) => {
  try {
    let users = await UserHelper.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
