import React, { Fragment } from 'react';
import '../styles/style.css';

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
    <div className='contact-info'>
      <div>
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
      </div>
      <div id='me'>
        
      </div>
    </div>
    
    
    
    </Fragment>
  );
}



export default Contact;
