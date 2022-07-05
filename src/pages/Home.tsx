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
        Thank you for your interest in my personal portfolio. Here you will find my favorite research, interests, and personal projects including talks and demos.
      </p>

      <p>
        If anything here seem out of place or dry, please note that the website&#8212;and my sometimes distracted brain&#8212;is a work in progress. Wrapping up 
        this degree often restricts my availability for web-dev to intermittent bursts of productivity. Still, feel free to snoop the place.
       </p>
    </div>
  </Fragment>);
}



export default Home;
