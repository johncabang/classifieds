import "./App.css";
import Hero from "./components/pages/Hero";
import Login from "./components/pages/Login";
import Post from "./components/pages/Post";
import Register from "./components/pages/Register";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>Home</h3>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/hero" component={Hero} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
