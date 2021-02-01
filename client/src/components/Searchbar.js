import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  root: {
    // display: "flex",
    // justifyContent: "center",
  },
}));

function Searchbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth variant="outlined">
        <TextField
          id="outlined-size-normal"
          placeholder="search for anything..."
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => console.log(e.target.value)}
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
