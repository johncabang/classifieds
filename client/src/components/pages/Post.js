import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Hero from "../Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "absolute",
    top: "20%",
    width: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(20px)",
    borderRadius: "40px",
    border: "2px solid rgba(255, 255, 255, 0.4)",
    padding: "30px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "white",
    textTransform: "none",
  },
  cssLabel: {
    color: "#000",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#000",
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#000",
  },
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Post() {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <Hero />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Post
          </Typography>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
                color="primary"
              >
                <MenuItem value="" disabled>
                  Category
                </MenuItem>
                <MenuItem value={10}>Arts & Collectibles</MenuItem>
                <MenuItem value={20}>Books</MenuItem>
                <MenuItem value={30}>Cameras</MenuItem>
                <MenuItem value={40}>Clothing</MenuItem>
                <MenuItem value={50}>Computers</MenuItem>
                <MenuItem value={60}>Electronics</MenuItem>
                <MenuItem value={70}>Free Stuff</MenuItem>
                <MenuItem value={80}>Home</MenuItem>
                <MenuItem value={90}>Phones</MenuItem>
                <MenuItem value={100}>Sporting Goods</MenuItem>
                <MenuItem value={110}>Tools</MenuItem>
                <MenuItem value={120}>Toys</MenuItem>
                <MenuItem value={130}>Video Games & Consoles</MenuItem>
                <MenuItem value={140}>Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="adTitle"
              label="Ad Title"
              name="adTitle"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="description"
              id="description"
              multiline
              rows={4}
              rowsMax={6}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="price"
              id="price"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Post Your Ad
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default Post;
