import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Avatar, Menu, MenuItem, Button } from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: "#ff7961",
    height: 30,
    width: 30,
  },
}));

function ProfileMenu({ handleLogout, user }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} style={{ backgroundColor: "transparent" }}>
        <Avatar className={classes.avatar} aria-label="avatar">
          {user.email.charAt(0)}
        </Avatar>
        <span>
          <ExpandMoreIcon />
        </span>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/profile" onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/myads" onClick={handleClose}>
          My Ads
        </MenuItem>
        {/* <MenuItem component={Link} to="/myorders" onClick={handleClose}>
          My Orders
        </MenuItem> */}
        <MenuItem component={Link} to="/settings" onClick={handleClose}>
          Account Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
