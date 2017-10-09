import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <header>
    <div className="container">
      <div className="my_items">
        <Link className="logo" to="/">
          <h1>TV</h1>
        </Link>
        <div className="menu">
          <Link className="menu-link" to="/about">
            <i class="fa fa-bolt" aria-hidden="true" />
            About
          </Link>
          <Link className="menu-link" to="/projects">
            Projects
          </Link>
          <Link className="menu-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
