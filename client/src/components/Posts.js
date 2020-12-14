import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";

import "../App.css";

const tileData = [
  {
    img:
      "https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Zoo Animal Figurines",
    price: "$35",
    featured: true,
  },
  {
    img:
      "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Automotive Tools",
    price: "$60",
    featured: false,
  },
  {
    img:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Bicycle",
    price: "$105",
    featured: false,
  },
  {
    img:
      "https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Classic Boombox",
    price: "$55",
    featured: false,
  },
  {
    img:
      "https://images.pexels.com/photos/1422220/pexels-photo-1422220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Lot of Cameras",
    price: "$120",
    featured: false,
  },
  {
    img:
      "https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Doll House",
    price: "$40",
    featured: true,
  },
  {
    img:
      "https://images.pexels.com/photos/4219892/pexels-photo-4219892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Original Playstation",
    price: "$85",
    featured: false,
  },
  {
    img:
      "https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Air Jordan 1",
    price: "$350",
    featured: false,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: 50,
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 1200,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
  },
  icon: {
    color: "white",
  },
  gridListTileBar: {
    background: "transparent",
  },
}));

function Posts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={200}
        spacing={4}
        className={classes.gridList}
        cols={4}
      >
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div">
            What's popular right now
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 4 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.price}</span>}
              actionIcon={
                <IconButton
                  aria-label={`tile.message`}
                  className={classes.icon}
                >
                  <MessageOutlinedIcon />
                </IconButton>
              }
            />
            <GridListTileBar
              className={classes.gridListTileBar}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Posts;
