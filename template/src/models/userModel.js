const mongoose = require("mongoose");

/* USER SCHEMA */
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // ... other fields
});

const User = mongoose.model("User", userSchema, "User"); // 1st "User" - name of the schema, 2nd "User" - name of the collection in the mongodb

module.exports = User;
