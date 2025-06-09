const Reminder = require("../models/Reminder");

const createReminder = async (req, res) => {
  const { message, date, time, method } = req.body;

  if (!message || !date || !time || !method) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const reminder = await Reminder.create({ message, date, time, method });
    res.status(201).json({ success: true, reminder });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createReminder };
