import React from "react";

import Post from "./Post";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const items = [
  {
    id: 1,
    img:
      "https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Zoo Animal Figurines",
    description:
      "Plastic wild animals toys make your baby toddlers to have immersive experience of the wildlife in the wild. Realistic african animals playset is designed for little hands and child' imagination. The parent-child safari wild animals world set includes a assortment of amazing plastic animals in realistic colors. Your children will love this set of friendly lovable animals figures.",
    price: "$35",
    featured: true,
  },
  {
    id: 2,
    img:
      "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Automotive Tools",
    description:
      "They include things like screwdrivers, hammers, pliers, wrenches, and socket sets. Other standard tools that can be used to repair vehicles include a jack, jack stands, funnel, multimeters, fuses, torque wrenches, breaker bars, socket adaptors, clamps, and more.",
    price: "$60",
    featured: false,
  },
  {
    id: 3,
    img:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Bicycle",
    description:
      "A bicycle (or bike) is a small, human powered land vehicle with a seat, two wheels, two pedals, and a metal chain connected to cogs on the pedals and rear wheel. A frame gives the bike strength, and the other parts are attached to the frame. ... Bicycling uses less energy per mile than any other human transport.",
    price: "$105",
    featured: false,
  },
  {
    id: 4,
    img:
      "https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Classic Boombox",
    description:
      "Beginning with the first portable radio-and-cassette players developed around 1977, the typical boombox incorporated an AM/FM receiver, an amplifier, two speakers, and a cassette or CD player, all built into a single carrying case.",
    price: "$55",
    featured: false,
  },
  {
    id: 5,
    img:
      "https://images.pexels.com/photos/1422220/pexels-photo-1422220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Lot of Cameras",
    description:
      "Classic camera values range from worthless up to $8,000 or more, depending on factors like brand, condition, film format and popularity. Many are worth around $15, though it's impossible to place an average value on classic cameras. The most expensive camera ever sold at auction was a Leica 0-series No.",
    price: "$120",
    featured: false,
  },
  {
    id: 6,
    img:
      "https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Doll House",
    description:
      "A dollhouse or doll's house is a toy home made in miniature. Since the early 20th century ... Enthusiasts share images online and use Internet forums, blogs and other online social media to share information about dollhouses and miniatures.",
    price: "$40",
    featured: true,
  },
  {
    id: 7,
    img:
      "https://images.pexels.com/photos/4219892/pexels-photo-4219892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Original Playstation",
    description:
      "The PlayStation, one of a new generation of 32-bit consoles, signaled Sony's rise to power in the video game world. Also known as the PS One, the PlayStation used compact discs (CDs), heralding the video game industry's move away from cartridges.",
    price: "$85",
    featured: false,
  },
  {
    id: 8,
    img:
      "https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Air Jordan 1",
    description:
      "The Air Jordan 1 High debuted in 1985 as the first signature sneaker developed by Nike for Michael Jordan. The Peter Moore designed performance basketball sneaker featured a simple Nike Dunk inspired design that incorporated the Nike Swoosh and the Jordan Wings logo and featured Nike Air.",
    price: "$350",
    featured: false,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#F8F9F9",
    overflow: "hidden",
    marginLeft: 300,
    marginRight: 300,
  },
  listSubHeader: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: "18px",
    padding: 0,
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "#fff",
  },
  gridListTileBar: {
    background: "transparent",
  },
  image: {
    width: "100%",
  },
}));

function Posts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>What's popular right now</Typography>

      {items.map((item) => (
        <Post
          key={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.price}
          featured={item.featured}
        />
      ))}
      <Button
        className={classes.button}
        variant="outlined"
        size="small"
        style={{ textTransform: "none", margin: "70px 0 70px 0" }}
      >
        Load More
      </Button>
    </div>
  );
}

export default Posts;
