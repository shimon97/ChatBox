import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { PageHeader } from "../../components/Common/PageHeader/PageHeader";
import { Chat } from "../../components/ChatPage/Chat/Chat";
import { getSweetAlertInputValue } from "../../utils/sweetalert";
import { useDispatch } from "react-redux";
import { joinChat } from "../../store/thunk";
import { ChatHeader } from "../../components/ChatPage/ChatHeader/ChatHeader";

export const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleJoinChat = async () => {
      // after getting messages succesfully and moving to chat page, asking the client to join the chat with a sweetalert form and nickname input
      const nickname = await getSweetAlertInputValue(
        "Welcome!",
        "nickname",
        "Join"
      );
      dispatch(joinChat(nickname));
    };
    handleJoinChat();
  }, [dispatch]);

  return (
    <Grid container spacing={0}>
      <PageHeader />
      <ChatHeader />
      <Chat />
    </Grid>
  );
};
