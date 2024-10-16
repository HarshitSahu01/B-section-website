import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
<<<<<<< HEAD
import ParticleCursor from "./Components/Cursor";
=======
import Placeholder from "./Pages/Placeholder";
>>>>>>> ee66f4b9b9ebcd96384e57d10ab793670f8e3df2

function App() {
  return (
    <div id="app">
      <ParticleCursor />
      <Navbar />
<<<<<<< HEAD
      <div id="content">
        <h1 className="text-center">B Section Website Page</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer>Footer hai ye</footer>
    </div>
=======
      {/* <h1 className="text-center">B section Website page</h1> */}
      <Routes>
        <Route path="/" element={<Placeholder />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <footer>Footer hai ye</footer> */}
    </>
>>>>>>> ee66f4b9b9ebcd96384e57d10ab793670f8e3df2
  );
}

export default App;
