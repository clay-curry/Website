import React, { Fragment } from 'react';
import '../styles/page.css';

function Contact() {
  
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
    <h2>Contact</h2>
    <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
    
    <h4>Location</h4>
      <p>
        Mailing Address:
        <div>206 W Johnson St</div>
        <div>Norman, OK 73069</div>     
      </p>
      <h4>Electronic</h4>
      <p>
        Email:
        <div><a href="mailto:claycurry34@gmail.com">claycurry34@gmail.com</a></div>
        Phone:
        <div><a href="tel:405-301-1055">405-301-1055</a></div>
      </p>

    

    <hr />
    <h4>More Coming</h4>
    <p>I'm just getting started with this website (and extremely busy with classes), but more is on its way. I will be open-sourcing a some personal 
      projects for demonstration on GitHub, so follow me on GitHub!</p>

    </Fragment>
  );
}



export default Contact;
