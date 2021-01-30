import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core/";

import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "80vh",
    paddingTop: 100,
    paddingBottom: 100,
  },
  card: {
    width: 400,
    height: 550,
    padding: 20,
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },

  media: {
    margin: "0 auto 0",
    width: "100%",
    height: 400,
  },
  avatar: {
    backgroundColor: "#ff7961",
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <div className={classes.cardcontainer}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                }
                title="John C."
              />
              <div className={classes.image}>
                <CardMedia
                  className={classes.media}
                  image="https://www.flaticon.com/svg/vstatic/svg/145/145850.svg?token=exp=1611981710~hmac=44b477b796dc3a443847a6cdff92e94e"
                  title="Profile Image"
                />
              </div>
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  Profile description.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
