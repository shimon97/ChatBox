import React from "react";
import moment from "moment";
import {
  MessageGrid,
  MessageContent,
  MessageTimestamp,
  MessagePaper,
} from "./Message.styles";
import { useSelector } from "react-redux";
import { MAIN_STORE } from "../../../../store";
import { Avatar } from "../../../Common/Avatar/Avatar";

export const Message = ({ message }) => {
  const { currentUserId } = useSelector((state) => state[MAIN_STORE]);
  const { senderId, senderNickname, content, createdAt } = message;
  const isSender = currentUserId === senderId;
  const messageDirection = isSender ? "left" : "right";

  return (
    <MessageGrid item xs={12} direcrtion={messageDirection}>
      {isSender && <Avatar name={senderNickname} />}
      <MessagePaper direcrtion={messageDirection}>
        <MessageContent direcrtion={messageDirection}>{content}</MessageContent>
        <MessageTimestamp direcrtion={messageDirection}>
          {moment(new Date(createdAt)).format("HH:mm DD/MM/YYYY")}
        </MessageTimestamp>
      </MessagePaper>
      {!isSender && <Avatar name={senderNickname} />}
    </MessageGrid>
  );
};
