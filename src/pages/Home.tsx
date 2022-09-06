import React, { Fragment } from 'react';
import '../styles/style.css';

function Home() {
  return (
    <>
      <div id='body'>
      <h2>Welcome</h2>
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
        Thank you for your interest in my personal portfolio. Here you will find my favorite research, interests, and personal projects including talks and demos.
      </p>

      <p>
      I'm just getting started, but more is on its way.
      If you want to stay up to date, you can follow me on twitter (I mostly retweet computer science memes)!
      In the meantime, I'm currently looking for jobs, so <b>please</b> contact me if you're looking to hire!

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
