import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core/";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    minHeight: "100vh",
    alignItems: "center",
  },
  media: {
    height: 500,
  },
}));
function DetailedPost() {
  const classes = useStyles();

  const { id } = useParams();

  return (
    <div className={classes.root}>
      <Grid containerspacing={0}>
        <Grid item xs={12}>
          <Typography variant="h5">Detailed - {id}</Typography>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Air Jordan"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Air Jordan
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Air Jordan 1 High debuted in 1985 as the first signature
                  sneaker developed by Nike for Michael Jordan. The Peter Moore
                  designed performance basketball sneaker featured a simple Nike
                  Dunk inspired design that incorporated the Nike Swoosh and the
                  Jordan Wings logo and featured Nike Air.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Leave a message
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailedPost;

// {
//   id: 8,
//   img:
//     "https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   title: "Air Jordan 1",
//   price: "$350",
//   featured: false,
// },
