import React, { useState, useEffect } from "react";

import Post from "./Post";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "15%",
    marginRight: "15%",
  },
}));

function Posts() {
  // Visible items set to 5 (default)
  const [visibleItems, setVisibleItems] = useState(5);

  // Set visible items to current amount + 5
  const handleClick = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const [items, setItems] = useState(null);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items && (
        <Post
          items={items}
          visibleItems={visibleItems}
          handleDelete={handleDelete}
        />
      )}
      <Button
        variant="outlined"
        size="small"
        style={{ textTransform: "none", margin: "70px 0 70px 0" }}
        onClick={handleClick}
      >
        Load More
      </Button>
    </div>
  );
}

export default Posts;
