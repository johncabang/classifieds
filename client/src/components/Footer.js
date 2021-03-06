import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff7961",
    color: "white",
    height: "15vh",
    width: "auto",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gridGap: 50,
    // paddingTop: 10,
  },
  copyright: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridGap: 10,
    paddingTop: 20,
    // paddingBottom: 20,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.icons}>
          <IconButton
            aria-label="Facebook.com"
            color="inherit"
            onClick={() => window.open("https://www.facebook.com")}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram.com"
            color="inherit"
            onClick={() => window.open("https://www.instagram.com")}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter.com"
            color="inherit"
            onClick={() => window.open("https://www.twitter.com")}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="YouTube.com"
            color="inherit"
            onClick={() => window.open("https://www.youtube.com")}
          >
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} className={classes.copyright}>
          <CopyrightIcon />
          {new Date().getFullYear()} classifieds
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
