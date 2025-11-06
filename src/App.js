import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // keep your Firebase setup
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import Explore from "./pages/Explore.js";
import Watch from "./pages/Watch.js";
import About from "./pages/About.js";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/Watch" element={<Watch />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
