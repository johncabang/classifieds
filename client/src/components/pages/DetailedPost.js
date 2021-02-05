import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
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
    width: 500,
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
  const { data: item, isLoading, error } = useFetch(
    "http://localhost:8000/items/" + id
  );

  return (
    <>
      {/* {console.log("This is from DetailedPost.js " + id)} */}

      {error && <div>{error}</div>}
      {isLoading && (
        <div>
          <LinearProgress color="secondary" />

          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={12}>
              <div className={classes.cardcontainer}>
                <Card className={classes.card}>
                  <Skeleton
                    variant="rect"
                    animation="wave"
                    width={500}
                    height={900}
                  />
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
      {item && (
        <Grid container spacing={0} className={classes.root}>
          <Grid item xs={12}>
            <div className={classes.cardcontainer}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title="Air Jordan"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>

                <div className={classes.formcontainer}>
                  <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      label="Write a message"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      size="small"
                      color="primary"
                      style={{
                        width: "100%",
                        marginTop: 10,
                        marginBottom: 30,
                        textTransform: "none",
                      }}
                    >
                      Send message
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default DetailedPost;
