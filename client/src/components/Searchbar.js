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
          placeholder="search for anything..."
          id="outlined-size-normal"
          variant="outlined"
          size="small"
          style={{ width: "50vh" }}
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
