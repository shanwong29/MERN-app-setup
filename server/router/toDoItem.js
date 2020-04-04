const express = require("express");
const router = express.Router();
const ToDoItems = require("../models/ToDoItem");

router.post("/toDoItems", async (req, res, next) => {
  try {
    await ToDoItems.create({
      toDo: req.body.toDo,
    });

    const allToDoItem = await ToDoItems.find({});
    res.json(allToDoItem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/toDoItems", async (req, res, next) => {
  try {
    const allToDoItem = await ToDoItems.find({});
    res.json(allToDoItem);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
