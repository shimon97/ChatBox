import React from "react";
import { StyledAvatar } from "./Avatar.styles";
import { Tooltip } from "@mui/material";

export const Avatar = ({ name }) => {
  return (
    <Tooltip title={name} arrow>
      <StyledAvatar sx={{ width: 24, height: 24 }}>
        {name[0].toUpperCase()}
      </StyledAvatar>
    </Tooltip>
  );
};
