import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "80vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

function Settings() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5">Account Settings</Typography>
      </Grid>
    </Grid>
  );
}

export default Settings;
