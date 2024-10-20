import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Navbar from "./Components/Navbar";
import CursorTrail from "./Components/CursorTrail";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <CursorTrail />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
