import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 0,
  },
}));

function Searchbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth variant="outlined">
        <TextField
          id="outlined-size-normal"
          // label="search for anything..."
          placeholder="search for anything..."
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
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
