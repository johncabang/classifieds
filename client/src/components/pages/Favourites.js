// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Typography } from "@material-ui/core/";

// const useStyles = makeStyles(() => ({
//   root: {
//     // minHeight: "80vh",
//     // alignItems: "center",
//     // display: "flex",
//     // justifyContent: "center",
//   },
// }));

// function Favourites() {
//   const classes = useStyles();

//   return (
//     <Grid
//       container
//       className={classes.root}
//       direction="column"
//       alignItems="center"
//       justify="center"
//       style={{ minHeight: "80vh" }}
//       spacing={0}
//     >
//       <Grid item xs={12}>
//         <Typography variant="h5">Favourites!</Typography>
//       </Grid>
//     </Grid>
//   );
// }

// export default Favourites;

import React from "react";
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
    width: 700,
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

function Favourites() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.cardcontainer}>
            <Card className={classes.card}>
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
                  <Typography variant="body1" color="textPrimary">
                    $750
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    The iPhone 11 Pro and iPhone 11 Pro Max are smartphones
                    designed, developed and marketed by Apple Inc. They are the
                    13th-generation flagship iPhones, succeeding the iPhone XS
                    and iPhone XS Max, respectively. Apple CEO Tim Cook unveiled
                    the devices alongside a lower-end model, the iPhone 11, on
                    September 10, 2019, at the Steve Jobs Theater at Apple Park.
                  </Typography>
                </CardContent>
                <div className={classes.icons}>
                  <IconButton
                    aria-label="leave a message"
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
