import { Paper } from "@mui/material";
import styled from "styled-components";
import { MOBILE_MEDIA_QUERY } from "../../../constants";

export const ChatHeaderPaper = styled(Paper)`
  width: 580px;
  height: 50px;
  border-radius: 20px 20px 0px 0px !important;
  padding: 10px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  @media ${MOBILE_MEDIA_QUERY} {
    width: 380px;
`;