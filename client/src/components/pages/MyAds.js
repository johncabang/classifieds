import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core/";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "15%",
    marginRight: "15%",
    minHeight: "80vh",
    paddingTop: 100,
    display: "flex",
    justifyContent: "center",
  },
  cardcontainer: {
    display: "flex",
    width: 700,
    height: 150,
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
}));

function MyAds() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardcontainer}>
        <CardMedia
          className={classes.cover}
          image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="iPhone 11 Pro"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              iPhone 11 Pro
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              $750
            </Typography>
          </CardContent>
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
  );
}

export default MyAds;
