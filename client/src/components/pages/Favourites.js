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
  favouritescontainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Favourites() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.favouritescontainer}>
            <Typography variant="h5">Favourites!</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Favourites;
