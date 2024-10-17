import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import CursorTrail from "./Components/CursorTrail";
import Achievements from "./Components/Achievements";
import ContactUs from "./Components/ContactUs";


function App() {
  return (
    <div className="bg-black">
  
      <Navbar />
      <CursorTrail/>
      <div className="min-h-screen ">
        <h1 className="text-white">B SECTION WEBSITE</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <footer className="bg-opacity-80 bg-slate-500 h-[10vh] flex justify-center items-center">Footer hai ye</footer>
    </div>
  );
}

export default App;
