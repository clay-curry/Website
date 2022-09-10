import React, { Fragment } from 'react';
import '../styles/style.css';

function Home() {
  return (
    <>
      <div id='body'>
      <h2>Hello</h2>
        <AboutMe />  
      </div>
    </>
  );
}

function AboutMe() {
  return (<Fragment>

    <div>
      <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
      <p>
      Thank you for your interest in my personal website. I am an undergraduate Computer Science research assistant in OU's School 
      of Computer Science collaborating with software engineers from the <a href="https://ou.edu/research-norman/news-events/2020/oc-alc-teams-up-with-ou-on-educational-partnership-agreement">OC-ALC's 76th Software Engineering Group</a> working under the supervision 
      of Interim Director Dr. Dean Hougen.
      </p>

      
      <p>
      I'm just getting started on this website, but more is on the way.
      </p>
      </div>
      <a rel="contact" href="/contact/" className="contact-button">
      <div> 
      <span className="bg"></span> 
      <span className="base"></span> 
      <span className="text">
        Contact me!
      </span>
      </div> 
    </a>
  </Fragment>);
}



export default Home;
