import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff7961",
    color: "white",
    height: "20vh",
  },
  icons: {
    paddingLeft: 20,
    paddingRight: 10,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12} className={classes.icons}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Grid>
    </Grid>
  );
}

export default Footer;
