import { Grid, Paper } from "@mui/material";
import styled from "styled-components";

export const MessageGrid = styled(Grid)`
  display: flex;
  justify-content: ${(props) =>
    props.direcrtion === "right" ? "flex-end" : "flex-start"} !important;
  align-items: center;
  height: fit-content;
`;

export const MessagePaper = styled(Paper)`
  background-color: ${(props) =>
    props.direcrtion === "right" ? "#F4F4F8" : "#007AFF"} !important;
  color: ${(props) =>
    props.direcrtion === "right" ? "#000" : "#FFF"} !important;
  border-radius: ${(props) =>
    props.direcrtion === "right"
      ? "20px 20px 0px 20px"
      : "20px 20px 20px 0px"} !important;
  max-width: 75%;
  word-wrap: break-word;
  font-size: 15px;
  padding: 10px;
  margin: 10px;
`;

export const MessageContent = styled.p`
  word-break: break-word;
  text-align: ${(props) =>
    props.direcrtion === "right" ? "end" : "start"} !important;
`;

export const MessageTimestamp = styled.p`
  font-size: 10px;
  color: ${(props) =>
    props.direcrtion === "right" ? "#000" : "#FFF"} !important;
  text-align: ${(props) =>
    props.direcrtion === "right" ? "start" : "end"} !important;
`;
