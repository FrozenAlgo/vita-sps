import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Compliance from "./pages/Compliance";
import Plans from "./pages/Plans";
import CyberRange from "./pages/services/CyberRange";
import Department from "./pages/services/Department";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/compliance/:pageId" element={<Compliance />}></Route>
        <Route path="/plans/:pageId" element={<Plans />}></Route>
        <Route path="/services/cyber-range" element={<CyberRange />}></Route>
        <Route path="/services/department" element={<Department />}></Route>
        <Route path="*" element={<Page404 />}></Route>
        {/* <Route path="*" element={<Page404 />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
