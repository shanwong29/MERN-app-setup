const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String,
});

module.exports = mongoose.model("Customer", customerSchema);
