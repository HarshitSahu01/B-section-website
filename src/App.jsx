import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import ParticleCursor from "./Components/Cursor";

function App() {
  return (
    <div id="app">
      <ParticleCursor />
      <Navbar />
      <div id="content">
        <h1 className="text-center">B Section Website Page</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer>Footer hai ye</footer>
    </div>
  );
}

export default App;
