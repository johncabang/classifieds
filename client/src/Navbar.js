import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import ProfileMenu from "./components/ProfileMenu";
import NotificationMenu from "./components/NotificationMenu";
import FavouriteMenu from "./components/FavouriteMenu";

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
