import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navContainer">
        <Link to="/" className="navTitle">
          Home
        </Link>
        <u1 className="navOptions">
          <li>
            <Link to="/Explore">Explore</Link>
          </li>
          <li>
            <Link to="/Watch">Watch</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </u1>
      </nav>
    </div>
  );
};

export default Navbar;
