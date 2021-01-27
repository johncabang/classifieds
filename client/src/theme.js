import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
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
