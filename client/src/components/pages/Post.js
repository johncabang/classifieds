import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import Hero from "../Hero";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      {/* <Hero /> */}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
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
                autoFocus
                color="primary"
              >
                <MenuItem value="" disabled>
                  Category
                </MenuItem>
                <MenuItem value={10}>Arts & Collectibles</MenuItem>
                <MenuItem value={20}>Books</MenuItem>
                <MenuItem value={30}>Cameras</MenuItem>
                <MenuItem value={30}>Clothing</MenuItem>
                <MenuItem value={30}>Computers</MenuItem>
                <MenuItem value={30}>Electronics</MenuItem>
                <MenuItem value={30}>Free Stuff</MenuItem>
                <MenuItem value={30}>Home</MenuItem>
                <MenuItem value={30}>Phones</MenuItem>
                <MenuItem value={30}>Sporting Goods</MenuItem>
                <MenuItem value={30}>Tools</MenuItem>
                <MenuItem value={30}>Toys</MenuItem>
                <MenuItem value={30}>Video Games & Consoles</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
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
        </div>
      </Container>
    </>
  );
}

export default Post;
