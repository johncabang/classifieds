import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import ProfileMenu from "./components/ProfileMenu";
import NotificationMenu from "./components/NotificationMenu";

import "./App.css";

function Navbar() {
  return (
    <div className="navbar__container">
      <Link className="navbar__links" to="/">
        <h3>Classifieds</h3>
      </Link>
      <ul className="navbar__right__links">
        <Link className="navbar__links" to="register">
          <li>Register</li>
        </Link>
        <Link className="navbar__links" to="signin">
          <li>Sign In</li>
        </Link>
        <li>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        </li>
        <li>
          <NotificationMenu />
        </li>
        <li>
          <ProfileMenu />
        </li>

        <Link className="navbar__links navbar__post" to="post">
          <Button variant="outlined" size="small">
            Post AD
          </Button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
