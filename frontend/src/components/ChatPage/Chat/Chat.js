import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { Message } from "./Message/Message";
import { ChatBox } from "./Chat.styles";
import { ChatInput } from "../ChatInput/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { MAIN_STORE } from "../../../store";
import { updateMessages } from "../../../store/main/main.actions";
import { SOCKET_API } from "../../../constants/requests";

export const Chat = () => {
  const dispatch = useDispatch();
  const { messages, socketConnection } = useSelector(
    (state) => state[MAIN_STORE]
  );
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (socketConnection) {
      socketConnection.on(SOCKET_API.UPDATE_MESSAGES, (newMessage) => {
        const updatedMessages = [...messages, newMessage];
        dispatch(updateMessages(updatedMessages));
      });
    }
  });

  return (
    <Grid container spacing={0}>
      <Grid display={"flex"} justifyContent={"center"} item xs={12}>
        <ChatBox>
          <Grid container spacing={0} alignItems={"center"}>
            {messages.map((message) => (
              <Message key={message._id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </Grid>
        </ChatBox>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} item xs={12}>
        <ChatInput />
      </Grid>
    </Grid>
  );
};
