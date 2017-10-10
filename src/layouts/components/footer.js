import React from "react";
import Link from "gatsby-link";

const Footer = () => (
  <footer>
    <div className="footer__div">
      <a
        href="https://www.linkedin.com/in/tomas-vorel-3bb622a2/"
        target="_blank"
      >
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>
      <a href="https://twitter.com/tomasvorel13" target="_blank">
        <i className="fa fa-twitter-square" aria-hidden="true" />
      </a>
      <a href="https://github.com/tomvorel13" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
