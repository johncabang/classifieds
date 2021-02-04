import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core/";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "80vh",
    paddingTop: 100,
    paddingBottom: 100,
    display: "flex",
    justifyContent: "center",
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    width: 800,
    height: 100,
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: 150,
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 50,
  },
}));

function MyAds() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <Typography component="h6" variant="h6">
              My Ads
            </Typography>
          </div>
          <div className={classes.cardcontainer}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="iPhone 11 Pro"
              />
              <div className={classes.details}>
                <Link
                  to={`/`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <CardContent className={classes.content}>
                    <Typography component="h7" variant="h7">
                      iPhone 11 Pro
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      $750
                    </Typography>
                  </CardContent>
                </Link>
                <div className={classes.icons}>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Card>

            {/* <Typography variant="h5">
        You have no active ads at the moment.
      </Typography>
      <Typography variant="body2">Why not post an ad now?</Typography> */}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAds;
