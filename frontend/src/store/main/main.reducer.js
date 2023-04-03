import { mainAction } from "./main.actions";
import appState from './main.state'; 

// eslint-disable-next-line
export default (state = appState, action) => {
    const { type, payload } = action
    switch (type) {
        case mainAction.LOAD_MESSAGES_REQUEST: {
            return {
                ...state,
                initialLoading: true,
                messages: []
            }
        }
        case mainAction.LOAD_MESSAGES_SUCCESS: {
            return {
                ...state,
                initialLoading: false,
                messages: payload
            }
        }
        case mainAction.LOAD_MESSAGES_FAILURE: {
            return {
                ...state,
                initialLoading: false,
                messages: []
            }
        }
        case mainAction.ADD_MESSAGE_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case mainAction.ADD_MESSAGE_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case mainAction.ADD_MESSAGE_FAILURE: {
            return {
                ...state,
                loading: false
            }
        }
        case mainAction.UPDATE_MESSAGES: {
            return {
                ...state,
                messages: payload
            }
        }
        case mainAction.UPDATE_CONNECTED_USERS: {
            return {
                ...state,
                connectedUsers: payload
            }
        }
        case mainAction.JOIN_CHAT: {
            const {socketConnection, nickname, generatedUserId } = payload
            return {
                ...state,
                socketConnection,
                currentUserId: generatedUserId,
                currentUserNickname: nickname
            }
        }
        case mainAction.LEAVE_CHAT: {
            return {
                ...state,
                socketConnection: null,
                currentUserId: "",
                currentUserNickname: ""
            }
        }
        default:
            return state;
    }
};