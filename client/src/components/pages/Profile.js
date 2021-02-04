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
    height: 350,
    padding: 20,
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },

  media: {
    margin: "0 auto 0",
    width: "50%",
    height: 200,
  },
  avatar: {
    backgroundColor: "#ff7961",
  },
}));

function Profile({ user }) {
  const classes = useStyles();

  return (
    <>
      {console.log("From Profile.js - ", user.email)}

      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <div className={classes.cardcontainer}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {user.email.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                }
                title="Profile"
              />
              <div className={classes.image}>
                <CardMedia
                  className={classes.media}
                  image="https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Round&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Dizzy&eyebrowType=RaisedExcited&mouthType=Vomit&skinColor=Brown"
                  title="Profile Image"
                />
              </div>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: {user.email}
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
