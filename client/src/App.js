import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Signin from "./components/pages/Signin";
import Post from "./components/pages/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import MyAds from "./components/pages/MyAds";
import MyOrders from "./components/pages/MyOrders";
import Settings from "./components/pages/Settings";
import Notifications from "./components/pages/Notifications";
import Favourites from "./components/pages/Favourites";
import DetailedPost from "./components/pages/DetailedPost";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      light: "#e0e0e0",
      main: "#616161",
      dark: "#212121",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F8F9F9",
    textAlign: "center",
    borderTop: "6px solid #ff7961",
    borderBottom: "6px solid #ff7961",
    position: "relative",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/myads" component={MyAds} />
            <Route path="/myorders" component={MyOrders} />
            <Route path="/settings" component={Settings} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/post" component={Post} />
            <Route path="/posts/:id" component={DetailedPost} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
