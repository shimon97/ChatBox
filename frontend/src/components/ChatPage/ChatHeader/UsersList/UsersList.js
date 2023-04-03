import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Popover,
} from "@mui/material";
import { Avatar } from "../../../Common/Avatar/Avatar";
import { AvatarsList, Title } from "./UsersList.styles";
import { useState } from "react";

export const UsersList = ({ users }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Title onClick={handleClick}>Online Users:</Title>
      <AvatarsList max={6} total={users.length} onClick={handleClick}>
        {users.map((user) => (
          <Avatar key={user} name={user} />
        ))}
      </AvatarsList>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <List subheader={<ListSubheader component="div">Users:</ListSubheader>}>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Avatar name={user} />
              </ListItemIcon>
              <ListItemText primary={user} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};
