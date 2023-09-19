const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    const response = { message: "All users", data: users };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Server error" });
  }
};
