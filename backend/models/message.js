const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    content: { type: String, required: true },
    senderId: { type: String, required: true },
    senderNickname: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
