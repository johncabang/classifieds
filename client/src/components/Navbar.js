import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import FavouriteMenu from "./FavouriteMenu";
import Searchbar from "./Searchbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "10vh",
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
    width: "25%",
    listStyle: "none",
    alignItems: "center",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className="navbar__links" to="/">
        <Typography
          variant="h5"
          component="h5"
          style={{ borderBottom: "3px solid #000" }}
        >
          classifieds
        </Typography>
      </Link>
      <Searchbar />
      <ul className={classes.links}>
        <Link className="navbar__links" to="register">
          <li>Register</li>
        </Link>
        <Link className="navbar__links" to="signin">
          <li>Sign In</li>
        </Link>
        <li>
          <FavouriteMenu />
        </li>
        <li>
          <NotificationMenu />
        </li>
        <li>
          <ProfileMenu />
        </li>

        <Link className="navbar__links navbar__post" to="post">
          <Button
            variant="outlined"
            size="small"
            style={{ textTransform: "none" }}
          >
            Post AD
          </Button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
