import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <p>Welcome to the Landing Page</p>
      <Link to="/Explore">Explore</Link>
      <br></br>
      <Link to="/Watch">Watch</Link>
    </div>
  );
}

export default Landing;
