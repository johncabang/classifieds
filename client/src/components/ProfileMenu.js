import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem, IconButton } from "@material-ui/core/";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ProfileMenu({ handleLogout }) {
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
        aria-label="add to favorites"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>
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
