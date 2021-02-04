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

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    display: "flex",
    justifyContent: "center",
    height: "80vh",
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
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

function Favourites() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <Typography component="h6" variant="h6">
              Favourites
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
                    {/* <Typography variant="body2" color="textSecondary">
                    The iPhone 11 Pro and iPhone 11 Pro Max are smartphones
                    designed, developed and marketed by Apple Inc. They are the
                    13th-generation flagship iPhones, succeeding the iPhone XS
                    and iPhone XS Max, respectively. Apple CEO Tim Cook unveiled
                    the devices alongside a lower-end model, the iPhone 11, on
                    September 10, 2019, at the Steve Jobs Theater at Apple Park.
                  </Typography> */}
                  </CardContent>
                </Link>
                <div className={classes.icons}>
                  <IconButton
                    aria-label="delete"
                    // onClick={() => handleDelete(item.id)}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Favourites;
