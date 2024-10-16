import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Placeholder from "./Pages/Placeholder";
import Navbar from "./Components/Navbar";
import ParticleCursor from "./Components/Cursor";
function App() {
  return (
    <div id="app">
      <ParticleCursor />
      <Navbar />
      {/* <h1 className="text-center">B section Website page</h1> */}
      <Routes>
        <Route path="/" element={<Placeholder />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <footer>Footer hai ye</footer> */}
    </div>
  );
}

export default App;
