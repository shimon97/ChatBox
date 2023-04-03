import { Paper } from "@mui/material";
import styled from "styled-components";
import { MOBILE_MEDIA_QUERY } from "../../../constants";

export const ChatBox = styled(Paper)`
  width: 600px;
  height: 300px;
  overflow-y: auto;
  padding-bottom: 10px;
  border-radius: 0px 0px 0px 0px !important;
  @media ${MOBILE_MEDIA_QUERY} {
    width: 400px;
  }
`;
