import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem } from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  submit: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function SigninMenu() {
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
      <Button
        className={classes.submit}
        onClick={handleClick}
        type="submit"
        style={{ textTransform: "none" }}
      >
        Sign in
      </Button>
      {/* <Link className={classes.submit} onClick={handleClick}>
        <li>Sign In</li>
      </Link> */}
      <Menu
        id="signin-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/adminsignin" onClick={handleClose}>
          Admin
        </MenuItem>
        <MenuItem component={Link} to="/signin" onClick={handleClose}>
          User
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SigninMenu;
