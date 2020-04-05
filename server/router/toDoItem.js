const express = require("express");
const router = express.Router();
const ToDoItems = require("../models/ToDoItem");

router.post("/", async (req, res, next) => {
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

router.get("/", async (req, res, next) => {
  try {
    const allToDoItem = await ToDoItems.find({});
    res.json(allToDoItem);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    await ToDoItems.findByIdAndDelete(req.body.id);
    const allToDoItem = await ToDoItems.find({});
    res.json(allToDoItem);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
