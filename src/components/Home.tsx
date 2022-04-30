import React, { Fragment } from 'react';
import '../styles/style.css';

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
  return (<Fragment>
    <h2>Hi</h2>
    <div>
      <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
      
      <p>
        <b>I</b> am an undergraduate at the University of Oklahoma with plans to graduate in Spring 2023 with a B.A. in Mathematics and a B.S. in Computer Science.
      </p>
      
      <p>
        My highest priority at the moment is getting funding for a masters or PhD program though grants or work opportunity.
        With this, I would love to explore the mathematical roots of my previous work (or similar work), to provide solid proofs about robustness and expected performance.
        </p>

      <p>
        This website is still very much in progress, and wrapping up two degrees often restricts my ability for web-dev to intermittent bursts of productivity.
        Feel free to snoop the place.
       </p>
    </div>
  </Fragment>);
}



export default Home;
