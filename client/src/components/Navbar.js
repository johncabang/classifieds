import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import ProfileMenu from "./ProfileMenu";
// import NotificationMenu from "./NotificationMenu";
import Searchbar from "./Searchbar";
import SigninMenu from "./SigninMenu";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: "15%",
    paddingRight: "15%",
    height: 80,
  },
  logo: {
    color: "inherit",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.logo} to="/">
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
        <li>
          <Button
            component={Link}
            to="/register"
            type="submit"
            style={{ textTransform: "none" }}
          >
            Register
          </Button>
        </li>
        <li>
          <SigninMenu />
        </li>
        <li>
          <IconButton component={Link} to="/favourites" type="submit">
            <FavoriteBorderIcon />
          </IconButton>
        </li>
        <li>
          <IconButton
            component={Link}
            to="/notifications"
            type="submit"
            aria-label="show 7 new notifications"
            aria-controls="notification-menu"
            aria-haspopup="true"
            // onClick={handleClick}
          >
            <Badge badgeContent={7} color="secondary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
        </li>
        <li>
          <ProfileMenu />
        </li>
        <li>
          <Button
            component={Link}
            to="/post"
            type="submit"
            style={{
              textTransform: "none",
              backgroundColor: "#ff7961",
              color: "#fff",
            }}
          >
            Post AD
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
