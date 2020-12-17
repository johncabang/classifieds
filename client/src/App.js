import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Signin from "./components/pages/Signin";
import Post from "./components/pages/Post";
import Navbar from "./Navbar";
import Profile from "./components/pages/Profile";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
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

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/post" component={Post} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
