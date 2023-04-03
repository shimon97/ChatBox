const express = require("express");
const { check } = require("express-validator");

const messagesControllers = require("../controllers/messages-controllers");

const router = express.Router();

router.get("/", messagesControllers.getMessages);

router.post(
  "/",
  [check("content").not().isEmpty(), check("senderId").not().isEmpty(), check("senderNickname").not().isEmpty()],
  messagesControllers.createMessage
);

module.exports = router;
