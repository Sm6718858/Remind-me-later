const express = require("express");
const router = express.Router();
const { createReminder } = require("../controllers/reminderController");

router.post("/api/reminders", createReminder);

module.exports = router;
