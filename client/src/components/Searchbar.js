import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { FormControl, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    border: "2",
    borderColor: "black",
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: "white",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "60ch",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Searchbar() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}></div>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <TextField
          placeholder="search for anything..."
          id="outlined-size-normal"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon style={{ paddingRight: 10 }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
}

export default Searchbar;
