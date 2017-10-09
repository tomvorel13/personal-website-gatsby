import React from "react";
import Link from "gatsby-link";

const About = () => (
  <div className="about__div">
    <h1 className="about__h1">About Me</h1>
    <div className="about__text">
      <p>Hi, I'm Tom Vorel.</p>
      <p>
        I am a passionate, self-taught front end web developer from Brno, Czech
        Republic. I wrote my first line of code back in high school, but it
        wasn't until the age of 22 when I decided, that I wanted to make my
        passion - creating beautiful things with code my full time job. My main
        focus as of right now is Javascript, in particular the React ecosystem,
        but I also enjoy exploring the newest technologies and frameworks (e.g.
        Node, Angular, Vue).
      </p>
      <p>
        My main passion outside of work are sports. I love running and
        weightlifting and I also play football from time to time. I also love
        watching documentaries, reading or listening to interesting podcasts
        while drinking a cup of coffee.
      </p>
    </div>
  </div>
);

export default About;
