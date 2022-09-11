import React, { Fragment } from 'react';
import '../styles/page.css';

function Home() {
  
  return (
    <>
      <div id='body'>
      
        <AboutMe />  
      </div>
    </>
  );
}

function AboutMe() {
  const partnership = "https://ou.edu/research-norman/news-events/2020/oc-alc-teams-up-with-ou-on-educational-partnership-agreement";
  return (<Fragment>
    <h2>Hello</h2>
    <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
    <p>
    Thank you for your interest in my personal website. I am an undergraduate research assistant in the School 
    of Computer Science at the University of Oklahoma collaborating with software engineers from the <a href={partnership}>
    OC-ALC's 76th Software Engineering Group</a> working under the supervision of Interim Director Dr. Dean Hougen.
    </p>

    <p>I'm currently seeking full-time opportunities for a start date in December, which are likely to be stepping stones into graduate school, preferrably in a position that intersects machine learning and sensor networks. Please reach out with any requests!</p>
    <a rel="contact" href="/contact/" className="contact-button">
      <div> 
      <span className="bg"></span> 
      <span className="base"></span> 
      <span className="text">
        Contact me!
      </span>
      </div> 
    </a>

    <hr />
    <h4>More Coming</h4>
    <p>I'm just getting started with this website (and extremely busy with classes), but more is on its way. If you want to see it sooner, follow me on GitHub!</p>

    </Fragment>
  );
}



export default Home;
