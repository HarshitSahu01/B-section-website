import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import CursorTrail from "./Components/CursorTrail";
import Achievements from "./Components/Achievements";
import ContactUs from "./Components/ContactUs";
import Creators from "./Components/Creators"; // Keep the Creators component

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <CursorTrail />
      
      {/* You can choose whether you need a heading or not */}
      <div className="min-h-screen">
        <h1 className="text-white">B SECTION WEBSITE</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Keep Achievements, Creators, and ContactUs components if needed */}
      <Achievements />
      <Creators />
      <ContactUs />
    </div>
  );
}

export default App;
