const SOCKET_API = Object.freeze({
    CONNECTION: "connection",
    JOIN_CHAT: "join_chat",
    LEAVE_CHAT: "leave_chat",
    NEW_MESSAGE: "new_message",
    UPDATE_MESSAGES: "update_messages",
    UPDATE_CONNECTED_USERS: "update_connected_users"
})

const connectedUsers = [];

const initializeSocketIO = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  io.on(SOCKET_API.CONNECTION, (socket) => {
    socket.on(SOCKET_API.JOIN_CHAT, (nickname) => {
      console.log(`|INFO| ${nickname} has joined the chat.`);
      connectedUsers.push(nickname);
      console.log(`|INFO| current connected users: ${JSON.stringify(connectedUsers,null,2)}`)
      io.sockets.emit(SOCKET_API.UPDATE_CONNECTED_USERS, connectedUsers);
    });

    socket.on(SOCKET_API.LEAVE_CHAT, (nickname) => {
      console.log(`|INFO| ${nickname} has left the chat.`);
      const userIndex = connectedUsers.findIndex((user)=> user === nickname);
      connectedUsers.splice(userIndex, 1);
      console.log(`|INFO| current connected users: ${JSON.stringify(connectedUsers,null,2)}`)
      io.sockets.emit(SOCKET_API.UPDATE_CONNECTED_USERS, connectedUsers);
    });

    socket.on(SOCKET_API.NEW_MESSAGE, (newMessage) => {
      io.sockets.emit(SOCKET_API.UPDATE_MESSAGES, newMessage);
    });
    
  });
};

exports.initializeSocketIO = initializeSocketIO;
