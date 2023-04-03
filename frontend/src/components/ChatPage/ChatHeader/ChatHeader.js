import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { MAIN_STORE } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { updateConnectedUsers } from "../../../store/main/main.actions";
import { SOCKET_API } from "../../../constants/requests";
import { ChatHeaderPaper } from "./ChatHeader.styles";
import { UsersList } from "./UsersList/UsersList";

export const ChatHeader = () => {
  const dispatch = useDispatch();

  const { connectedUsers, socketConnection } = useSelector(
    (state) => state[MAIN_STORE]
  );

  useEffect(() => {
    if (socketConnection) {
      socketConnection.on(
        SOCKET_API.UPDATE_CONNECTED_USERS,
        (connectedUsers) => {
          dispatch(updateConnectedUsers(connectedUsers));
        }
      );
    }
  });

  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <ChatHeaderPaper>
        <UsersList users={connectedUsers}/>
      </ChatHeaderPaper>
    </Grid>
  );
};
