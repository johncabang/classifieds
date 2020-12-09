import React from "react";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./App.css";

function Navbar() {
  return (
    <navbar className="navbar__container">
      <Link className="navbar__links" to="/">
        <h3>Classifieds</h3>
      </Link>
      {/* <div className="navbar__search">
        <div className="navbar__searchIcon">
          <SearchIcon />
        </div>
        <InputBase placeholder="Search for anything..." />
      </div> */}
      <ul className="navbar__right__links">
        <Link className="navbar__links" to="register">
          <li>Register</li>
        </Link>
        <Link className="navbar__links" to="signin">
          <li>Sign In</li>
        </Link>
        <Link className="navbar__links navbar__post" to="post">
          <Button variant="outlined">Post</Button>
        </Link>
      </ul>
    </navbar>
  );
}

export default Navbar;
