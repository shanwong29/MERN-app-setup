const express = require("express");
const router = express.Router();
const ToDoItems = require("../models/ToDoItem");

router.post("/toDoItems", async (req, res, next) => {
  try {
    const newToDoItem = await ToDoItems.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      message: req.body.message,
    });
    res.json(newToDoItem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/toDoItems", async (req, res, next) => {
  try {
    console.log("here");
    const toDoItem = await ToDoItems.find({});
    console.log("V", toDoItem);
    res.json(toDoItem);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
