import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "2vh",
    backgroundColor: "#dcdcdc",
    color: "#000",
    "&hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#397ba6",
      backgroundColor: "#dcdcdc",
    },
    right: "5%",
  },
}));

const Scroll = ({ showBelow }) => {
  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageXOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div>
      {show && (
        <IconButton onClick={handleClick} className={classes.toTop}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Scroll;

{
  /* <Scroll showBelow={150} /> */
}
