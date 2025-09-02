import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vita-sps/" element={<Home />}></Route>
        <Route path="/vita-sps/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
