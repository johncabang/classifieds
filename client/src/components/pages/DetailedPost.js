import React from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    paddingTop: 100,
    paddingBottom: 100,
  },
  card: {
    maxWidth: 500,
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },
  media: {
    height: 500,
  },
  formcontainer: {
    display: "flex",
    flexDirection: "column",
    padding: 14,
  },
}));
function DetailedPost() {
  const classes = useStyles();

  const { id } = useParams();

  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12}>
          {/* <Typography variant="h5">Detailed - {id}</Typography> */}
          {console.log("This is from DetailedPost.js " + id)}
          <div className={classes.cardcontainer}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Air Jordan"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Air Jordan
                </Typography>
                <Typography variant="h6" component="h2">
                  $350
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Air Jordan 1 High debuted in 1985 as the first signature
                  sneaker developed by Nike for Michael Jordan. The Peter Moore
                  designed performance basketball sneaker featured a simple Nike
                  Dunk inspired design that incorporated the Nike Swoosh and the
                  Jordan Wings logo and featured Nike Air.
                </Typography>
              </CardContent>

              <div className={classes.formcontainer}>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Write a message"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </form>
                <Button
                  variant="outlined"
                  size="small"
                  style={{ marginTop: 10, marginBottom: 30 }}
                >
                  Send message
                </Button>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailedPost;
