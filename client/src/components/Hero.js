import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage:
      "url(https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Hero() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}

export default Hero;
