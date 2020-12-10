import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./App.css";

function Navbar() {
  return (
    <navbar className="navbar__container">
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
        <Link className="navbar__links navbar__post" to="post">
          <Button variant="outlined" size="small">
            Post
          </Button>
        </Link>
      </ul>
    </navbar>
  );
}

export default Navbar;
