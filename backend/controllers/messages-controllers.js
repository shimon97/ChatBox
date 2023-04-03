const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Message = require("../models/message");

const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      message: "Fetched messages successfully.",
      messages: messages,
    });
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not fetch the messages.", 500)
    );
  }
};

const createMessage = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { content, senderId, senderNickname } = req.body;

  const createdMessage = new Message({
    content,
    senderId,
    senderNickname
  });

  try {
    await createdMessage.save();
  } catch (err) {
    const error = new HttpError(
      "Creating message failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: createdMessage });
};

exports.getMessages = getMessages;
exports.createMessage = createMessage;
