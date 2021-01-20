import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    alignItems: "center",
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5">Profile </Typography>
      </Grid>
    </Grid>
  );
}

export default Profile;
