import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// const useStyles = makeStyles(() => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     backgroundColor: "#F8F9F9",
//     overflow: "hidden",
//     marginLeft: 300,
//     marginRight: 300,
//   },
//   listSubHeader: {
//     marginTop: 20,
//     marginBottom: 20,
//     fontSize: "18px",
//     padding: 0,
//   },
//   gridList: {
//     width: "100%",
//   },
//   icon: {
//     color: "#fff",
//   },
//   gridListTileBar: {
//     background: "transparent",
//   },
//   image: {
//     width: "100%",
//   },
// }));

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 500,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 200,
  },
});

function Post(props) {
  const classes = useStyles();
  const { id, img, title, price, featured, description } = props;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {price}
          </Button>
          <Link to={`/posts/${id}`}>DetailedPost.js</Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
