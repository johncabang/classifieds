import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
    // minHeight: "80vh",
    // alignItems: "center",
  },
}));

function MyOrders() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "80vh" }}
      spacing={0}
    >
      <Grid item xs={12}>
        <Typography variant="h5">You have no orders at the moment.</Typography>
      </Grid>
    </Grid>
  );
}

export default MyOrders;
