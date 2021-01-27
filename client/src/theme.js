// import { green, purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//   },
// });

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#616161",
    },
    secondary: {
      main: "#f44336",
    },
  },
  status: {
    danger: "orange",
  },
});

export default theme;
