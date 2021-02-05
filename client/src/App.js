import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import AdminSignin from "./components/pages/AdminSignin";
import Signin from "./components/pages/Signin";
import CreatePost from "./components/pages/CreatePost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import MyAds from "./components/pages/MyAds";
import MyOrders from "./components/pages/MyOrders";
import Settings from "./components/pages/Settings";
import Notifications from "./components/pages/Notifications";
import Favourites from "./components/pages/Favourites";
import DetailedPost from "./components/pages/DetailedPost";
import NotFound from "./components/pages/NotFound";

import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

import fire from "./firebase";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F8F9F9",
    // borderTop: "6px solid #ff7961",
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (event) => {
    event.preventDefault();

    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((err) => {
        // eslint-disable-next-line
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((err) => {
        // eslint-disable-next-line
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    history.push("/");
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Navbar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/adminsignin" component={AdminSignin} />
        <Route path="/signin">
          <Signin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </Route>
        <Route path="/profile">
          <Profile user={user} email={email} />
        </Route>
        <Route path="/myads" component={MyAds} />
        <Route path="/myorders" component={MyOrders} />
        <Route path="/settings" component={Settings} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/CreatePost" component={CreatePost} />
        <Route path="/item/:id" component={DetailedPost} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
