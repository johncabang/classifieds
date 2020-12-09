import "./App.css";
import Hero from "./components/pages/Hero";
import Login from "./components/pages/Login";
import Post from "./components/pages/Post";
import Register from "./components/pages/Register";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      <Login />
      <Post />
      <Hero />
    </div>
  );
}

export default App;
