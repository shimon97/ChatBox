
import { createAction } from "redux-actions";

export const mainAction = {
    LOAD_MESSAGES_REQUEST: 'LOAD_MESSAGES_REQUEST',
    LOAD_MESSAGES_SUCCESS: 'LOAD_MESSAGES_SUCCESS',
    LOAD_MESSAGES_FAILURE: 'LOAD_MESSAGES_FAILURE',
    DELETE_MESSAGE_REQUEST: 'DELETE_MESSAGE_REQUEST',
    DELETE_MESSAGE_SUCCESS: 'DELETE_MESSAGE_SUCCESS',
    DELETE_MESSAGE_FAILURE: 'DELETE_MESSAGE_FAILURE',
    ADD_MESSAGE_REQUEST: 'ADD_MESSAGE_REQUEST',
    ADD_MESSAGE_SUCCESS: 'ADD_MESSAGE_SUCCESS',
    ADD_MESSAGE_FAILURE: 'ADD_MESSAGE_FAILURE',
    UPDATE_MESSAGES: 'UPDATE_MESSAGES',
    UPDATE_CONNECTED_USERS: 'UPDATE_CONNECTED_USERS',
    JOIN_CHAT: 'JOIN_CHAT',
    LEAVE_CHAT: 'LEAVE_CHAT'
};

// loading messages actions
export const loadMessagesRequest = createAction(mainAction.LOAD_MESSAGES_REQUEST);
export const loadMessagesSuccess = createAction(mainAction.LOAD_MESSAGES_SUCCESS);
export const loadMessagesFailure = createAction(mainAction.LOAD_MESSAGES_FAILURE);

// adding new message actions
export const addMessageRequest = createAction(mainAction.ADD_MESSAGE_REQUEST);
export const addMessageSuccess = createAction(mainAction.ADD_MESSAGE_SUCCESS);
export const addMessageFailure = createAction(mainAction.ADD_MESSAGE_FAILURE);

// update messages in chat actions
export const updateMessages = createAction(mainAction.UPDATE_MESSAGES);

// update users in chat actions
export const updateConnectedUsers = createAction(mainAction.UPDATE_CONNECTED_USERS);

// chat actions
export const joinChat = createAction(mainAction.JOIN_CHAT);
export const leaveChat = createAction(mainAction.LEAVE_CHAT);