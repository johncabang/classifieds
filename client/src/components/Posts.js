import React, { useState } from "react";

import Post from "./Post";
import useFetch from "../hooks/useFetch";

import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "15%",
    marginRight: "15%",
    minHeight: "80vh",
  },
}));

function Posts() {
  const { data: items, isLoading, error } = useFetch(
    "http://localhost:8000/items"
  );
  // Visible items set to 5 (default)
  const [visibleItems, setVisibleItems] = useState(5);

  // Set visible items to current amount + 5
  const handleClick = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  // Delete item function
  // const handleDelete = (id) => {
  //   const newItems = items.filter((item) => item.id !== id);
  //   setItems(newItems);
  // };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {error && <div>{error}</div>}
      {isLoading && (
        <div>
          <LinearProgress color="secondary" />
        </div>
      )}
      {items && (
        <Post
          items={items}
          visibleItems={visibleItems}
          // handleDelete={handleDelete}
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
