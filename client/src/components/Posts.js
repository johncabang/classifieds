import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarBorderIcon from "@material-ui/icons/StarBorder";

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

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//     minWidth: 200,
//     padding: 50,
//     margin: 20,
//   },
//   media: {
//     height: 140,
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 1200,
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Posts() {
  const classes = useStyles();

  return (
    <div className="posts__container">
      <GridList
        cellHeight={200}
        spacing={4}
        className={classes.gridList}
        cols={4}
      >
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

//     <div className="posts__container">
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//             title="Zoo Animal Figurines"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Zoo Animal Figurines
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $20.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//             title="Automotive Tools"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Automotive Tools
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions className="posts__cardactions">
//           <Button size="small" color="primary">
//             $25.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//             title="Bicycle"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Bicycle
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $125.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//             title="Boombox"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Classic Boombox{" "}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $20.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/1422220/pexels-photo-1422220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             title="Lot of Cameras"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Lot of Cameras
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $120.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//             title="Doll House"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Doll House
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $40.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/4219892/pexels-photo-4219892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             title="Original Playstation"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Original Playstation
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $80.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>

//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//             title="Air Jordan 1"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h7" component="h3" align="left">
//               Air Jordan 1
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             $250.00
//           </Button>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="message">
//             <MessageOutlinedIcon />
//           </IconButton>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

// export default Posts;
