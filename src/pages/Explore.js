import React from "react";
import { Link } from "react-router-dom";

function explore() {
  return (
    <div>
      <p>Welcome to the explore page</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default explore;
