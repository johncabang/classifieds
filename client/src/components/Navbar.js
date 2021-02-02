import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import ProfileMenu from "./ProfileMenu";
// import Searchbar from "./Searchbar";
import SigninMenu from "./SigninMenu";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";

import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Badge from "@material-ui/core/Badge";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "15%",
    paddingRight: "15%",
    height: 80,
    backgroundColor: "white",
  },
  nav: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
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

  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const { history, user, handleLogout } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };
  // console.log("useHistory From Navbar.js - ", history);

  const menuItems = [
    {
      menuTitle: "Register",
      pageURL: "/register",
    },
    {
      menuTitle: "Login",
      pageURL: "/signin",
    },
    {
      menuTitle: "Profile",
      pageURL: "/profile",
    },
    {
      menuTitle: "My Ads",
      pageURL: "/myads",
    },
    {
      menuTitle: "Settings",
      pageURL: "/settings",
    },
    {
      menuTitle: "Favourites",
      pageURL: "/favourites",
    },
    {
      menuTitle: "Logout",
      pageURL: "/",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar style={{ padding: 0 }}>
          {isMobile ? (
            <div className={classes.nav}>
              <Link className={classes.logo} to="/">
                <Typography
                  className={classes.title}
                  variant="h3"
                  component="h3"
                  style={{ borderBottom: "5px solid #000" }}
                >
                  c
                </Typography>
              </Link>
              <div className={classes.menuButton}>
                <IconButton
                  component={Link}
                  to="/notifications"
                  type="submit"
                  aria-label="show 7 new notifications"
                  aria-controls="notification-menu"
                  aria-haspopup="true"
                  style={{ paddingRight: 30 }}
                  // onClick={handleClick}
                >
                  <Badge badgeContent={7} color="secondary">
                    <NotificationsNoneOutlinedIcon />
                  </Badge>
                </IconButton>

                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map((menuItem, index) => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => handleMenuClick(pageURL)}
                      >
                        {menuTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </div>
          ) : (
            <div className={classes.nav}>
              <Link className={classes.logo} to="/">
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ borderBottom: "3px solid #000" }}
                >
                  classifieds
                </Typography>
              </Link>

              {/* <Searchbar handleChange={(e) => console.log(e.target.value)} /> */}

              {console.log("From NavBar.js - ", user)}

              {user ? (
                <ul className={classes.links}>
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
                    <ProfileMenu handleLogout={handleLogout} />
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
              ) : (
                <ul className={classes.links}>
                  {/* <li>
                    <Button
                      component={Link}
                      to="/register"
                      type="submit"
                      style={{ textTransform: "none" }}
                    >
                      Register
                    </Button>
                  </li> */}
                  <li>
                    <SigninMenu />
                  </li>
                </ul>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
