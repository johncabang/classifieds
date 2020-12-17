import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

function NotificationMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="show 7 new notifications"
        aria-controls="notification-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={7} color="secondary">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/notifications" onClick={handleClose}>
          Notifications
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NotificationMenu;
