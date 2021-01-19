import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import FavouriteMenu from "./FavouriteMenu";
import Searchbar from "./Searchbar";

// import "../App.css";

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
        <h3>Classifieds</h3>
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
