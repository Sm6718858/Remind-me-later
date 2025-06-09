const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  method: { type: String, enum: ["sms", "email"], required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model("Reminder", reminderSchema);
