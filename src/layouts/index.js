import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "normalize.css/normalize.css";
import "./styles/index.scss";

import Header from "./components/header";
import Footer from "./components/footer";

const TemplateWrapper = ({ children }) => (
  <div className="body">
    <Header />
    <div className="children">
      <div className="container">{children()}</div>
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
