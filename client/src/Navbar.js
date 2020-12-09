import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <h3>classifieds</h3>
      <ul className="navbar__links">
        <li>
          <Button color="primary">register</Button>
        </li>
        <li>
          <Button color="primary">login</Button>
        </li>
        <li>
          <Button variant="outlined" color="primary">
            post
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
