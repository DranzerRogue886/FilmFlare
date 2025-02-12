const express = require("express");
const router = express.Router();
const UserData = require("../Schemas/UserData.js");
const mongoose = require("mongoose");

//POST user
router.post("/adduser", async (req, res) => {
  console.log("attempting to POST");
  try {
    const UserData = new UserData(req.body);
    console.log(UserData);
    await UserData.save();
    res.send("OK");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//GET all users

//GET single user

//PATCH single user

//DELETE single user

module.exports = router;
