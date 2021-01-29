import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 500,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
});

function Post(props) {
  const classes = useStyles();
  const { id, img, title, price, featured, description } = props;

  return (
    <div>
      <Card className={classes.root}>
        <Link
          to={`/posts/${id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              // height="170"
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
            <FavoriteBorderIcon />
            <MessageOutlinedIcon />
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}

export default Post;
