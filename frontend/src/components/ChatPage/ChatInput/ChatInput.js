import React, { useState } from "react";
import { StyledIconButton, StyledInput, StyledPaper } from "./ChatInput.styles";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/thunk";
import { MAIN_STORE } from "../../../store";
import { CircularProgress } from "@mui/material";

export const ChatInput = () => {
  const dispatch = useDispatch();
  const { currentUserId, currentUserNickname, loading } = useSelector(
    (state) => state[MAIN_STORE]
  );
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(message, currentUserId, currentUserNickname));
    setMessage("");
  };

  return (
    <StyledPaper component="form" onSubmit={handleOnSubmit}>
      <StyledInput
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Enter Message"
      />
      <StyledIconButton
        type="button"
        aria-label="send"
        onClick={handleOnSubmit}
        disabled={message.length === 0}
      >
        {loading ? <CircularProgress size={24} /> : <SendIcon />}
      </StyledIconButton>
    </StyledPaper>
  );
};
