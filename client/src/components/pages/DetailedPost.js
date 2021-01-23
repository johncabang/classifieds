import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core/";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    alignItems: "center",
  },
}));
function DetailedPost() {
  const classes = useStyles();

  const { id } = useParams();

  return (
    <div>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h5">Detailed - {id}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailedPost;
