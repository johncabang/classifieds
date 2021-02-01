import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import AdminSignin from "./components/pages/AdminSignin";
import Signin from "./components/pages/Signin";
import Post from "./components/pages/PostAd";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import MyAds from "./components/pages/MyAds";
import MyOrders from "./components/pages/MyOrders";
import Settings from "./components/pages/Settings";
import Notifications from "./components/pages/Notifications";
import Favourites from "./components/pages/Favourites";
import DetailedItem from "./components/pages/DetailedItem";

import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F8F9F9",
    borderTop: "6px solid #ff7961",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/adminsignin" component={AdminSignin} />
        <Route path="/signin" component={Signin} />
        <Route path="/profile" component={Profile} />
        <Route path="/myads" component={MyAds} />
        <Route path="/myorders" component={MyOrders} />
        <Route path="/settings" component={Settings} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/post" component={Post} />
        <Route path="/item/:id" component={DetailedItem} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
