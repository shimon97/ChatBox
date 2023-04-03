const appState = Object.freeze({
    initialLoading: true,
    loading: false,
    socketConnection: null,
    currentUserId: "",
    currentUserNickname: "",
    messages: [],
    connectedUsers: []
});

export default appState;