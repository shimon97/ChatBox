export const BASE_BACKEND_HOST = "http://localhost:7000";
export const BASE_BACKEND_API = `${BASE_BACKEND_HOST}/api`;
export const BACKEND_MESSAGES_API = `${BASE_BACKEND_API}/messages`;
export const SOCKET_API = Object.freeze({
  JOIN_CHAT: "join_chat",
  LEAVE_CHAT: "leave_chat",
  NEW_MESSAGE: "new_message",
  UPDATE_MESSAGES: "update_messages",
  UPDATE_CONNECTED_USERS: "update_connected_users",
});
