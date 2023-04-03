import { IconButton, InputBase, Paper } from "@mui/material";
import styled from "styled-components";
import { MOBILE_MEDIA_QUERY } from "../../../constants";

export const StyledPaper = styled(Paper)`
  border-radius: 0px 0px 20px 20px !important;
  padding: 10px;
  border-top: 1px solid #000;
`;

export const StyledInput = styled(InputBase)`
  width: 540px;
  background: #fff;
  border-radius: 0px 0px 20px 20px;
  outline: none;
  @media ${MOBILE_MEDIA_QUERY} {
    width: 340px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: ${(props) => (props.disabled ? "#BDBDBD" : "#007AFF")} !important;
`;
