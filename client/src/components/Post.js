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

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  posts: {
    marginTop: 40,
    maxWidth: 220,
    padding: 10,
  },
  media: {
    height: 200,
  },
  cardfooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    padding: 20,
  },
});

function Post({ items, visibleItems, handleDelete }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items.slice(0, visibleItems).map((item) => (
        <div key={item.id}>
          <div className={classes.posts}>
            <Card>
              <Link
                to={`/posts/${item.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={item.img}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="p">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <div className={classes.cardfooter}>
                {item.price}
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton
                  aria-label="leave a message"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
