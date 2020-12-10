import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Signin from "./components/pages/Signin";
import Post from "./components/pages/Post";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={Signin} />
          <Route path="/post" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
