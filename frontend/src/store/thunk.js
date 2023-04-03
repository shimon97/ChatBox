import * as actions from "./main/main.actions";
import { push } from "connected-react-router";
import { MAIN_STORE } from ".";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import io from "socket.io-client";
import { BACKEND_MESSAGES_API, BASE_BACKEND_HOST, SOCKET_API } from "../constants/requests";
import { ROUTES } from "../constants/routes";

export const initialApp = () => {
  return async (dispatch, getState) => {
    try {
      await dispatch(actions.loadMessagesRequest());
      // load messages data from api
      const { data } = await axios.get(BACKEND_MESSAGES_API);

      // await the change state of loading to show routes in App.js and make them available
      await dispatch(actions.loadMessagesSuccess(data.messages));
      dispatch(push(ROUTES.CHAT));
    } catch (error) {
      // await the change state of loading to show routes in App.js and make them available
      await dispatch(actions.loadMessagesFailure());
      dispatch(push(ROUTES.ERROR));
    }
  };
};

export const joinChat = (nickname) => {
  return async (dispatch, getState) => {
    try {
      const socketConnection = await io.connect(BASE_BACKEND_HOST);
      await socketConnection.emit(SOCKET_API.JOIN_CHAT, nickname);
      
      // *jwt token that contains nickname + userid should be generated in backend when joining chat and retrieved to the front its data*
      const generatedUserId = uuidv4();
      dispatch(
        actions.joinChat({ socketConnection, nickname, generatedUserId })
      );
    } catch (error) {
      dispatch(push(ROUTES.ERROR));
    }
  };
};

export const leaveChat = () => {
  return async (dispatch, getState) => {
    try {
      const { socketConnection, currentUserNickname } = getState()[MAIN_STORE];
      // if socket isn't null that means the user has joined the chat with a nickname
      if (socketConnection !== null) {
        await socketConnection.emit(SOCKET_API.LEAVE_CHAT, currentUserNickname);
        await socketConnection.disconnect();
        dispatch(actions.leaveChat());
      }
    } catch (error) {
      dispatch(push(ROUTES.ERROR));
    }
  };
};

export const addMessage = (content, senderId, senderNickname) => {
  return async (dispatch, getState) => {
    try {
      const { socketConnection } = getState()[MAIN_STORE];

      dispatch(actions.addMessageRequest());
      // add meesage with api
      const { data } = await axios.post(BACKEND_MESSAGES_API, {
        content,
        senderId,
        senderNickname,
      });

      await socketConnection.emit(SOCKET_API.NEW_MESSAGE, data.message);
      dispatch(actions.addMessageSuccess());
    } catch (error) {
      await dispatch(actions.addMessageFailure());
      dispatch(push(ROUTES.ERROR));
    }
  };
};
