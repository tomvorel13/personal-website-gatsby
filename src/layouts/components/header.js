import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div>
    <h1>TV</h1>
    <ul>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  </div>
);

export default Header;
