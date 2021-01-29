import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    marginTop: 20,
    marginRight: 20,
  },
  media: {
    height: 180,
  },
  cardfooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    padding: 20,
  },
});

function Post(props) {
  const classes = useStyles();
  const { id, img, title, price, description } = props;

  return (
    <div className={classes.root}>
      <Card>
        <Link
          to={`/posts/${id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={img}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="p">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <div className={classes.cardfooter}>
          {price}
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="leave a message">
            <MessageOutlinedIcon />
          </IconButton>
        </div>
      </Card>
    </div>
  );
}

export default Post;
