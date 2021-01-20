import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ff7961",
    color: "white",
    height: "20vh",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Footer</Typography>
    </div>
  );
}

export default Footer;
