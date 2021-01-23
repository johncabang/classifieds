import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";

import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import FavouriteMenu from "./FavouriteMenu";
import Searchbar from "./Searchbar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
    width: "22%",
    listStyle: "none",
    alignItems: "center",
  },
  searchbar: {
    position: "absolute",
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
      <Box className={classes.searchbar}>
        <Searchbar />
      </Box>
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
            size="small"
            style={{
              textTransform: "none",
              backgroundColor: "#ff7961",
              color: "#fff",
            }}
          >
            Post AD
          </Button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
