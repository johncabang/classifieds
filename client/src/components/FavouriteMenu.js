import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function FavouriteMenu() {
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
        aria-label="add to favourites"
        aria-controls="favourite-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <Menu
        id="favourite-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/favourites" onClick={handleClose}>
          Favourites
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FavouriteMenu;
