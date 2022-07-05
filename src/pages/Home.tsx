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
    <h2>Clayton B. Curry</h2>
    <div>
      <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
      
      <p>
      Thank you for your interest in my personal portfolio. Here you will find my favorite research, interests, personal projects.
      </p>

      <p>
        This website is still very much in progress, and wrapping up what feels like two degrees often restricts my ability for web-dev to intermittent bursts of productivity.
        Feel free to snoop the place.
       </p>
    </div>
  </Fragment>);
}



export default Home;
