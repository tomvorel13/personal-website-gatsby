import React from "react";

const Projects = () => (
  <div className="projects__div">
    <h1 className="projects__h1">Projects</h1>
    {/* ******************PROJECT no.1****************** */}
    <div className="projects__project">
      <div className="projects__img">
        <h2 className="projects__name">WeatherNOW App</h2>
      </div>
      <div className="projects__description">
        <p>
          A simple weather app built with React.js. It uses the Openweather API
          to fetch real-time data with Axios. I am also using SASS for my
          styling. The app is fully responsive, mobile-ready. It also has its
          own Express.js server, in order for it to be deployed to Heroku. You
          can check out the app{" "}
          <a
            className="projects__link"
            href="https://weather-now-app.herokuapp.com/"
            target="_blank"
          >
            HERE
          </a>.
        </p>
      </div>
    </div>
    {/* ******************PROJECT no.2****************** */}
    <div className="projects__project">
      <div className="projects__img">
        <h2 className="projects__name">TOMVOREL.COM</h2>
      </div>
      <div className="projects__description">
        <p>
          This website was created with Gatsby.js, which is a static site
          generator, that uses React on the front end. I used SASS as my CSS
          preprocessor. You can check out the site on...wait, you are already
          here :) .
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
