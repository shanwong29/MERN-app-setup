const mongoose = require("mongoose");

const toDoItemSchema = mongoose.Schema({
  toDo: { type: String, required: true },
});

module.exports = mongoose.model("ToDoItem", toDoItemSchema);
