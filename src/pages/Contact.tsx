import React, { Fragment } from 'react';
import '../styles/style.css';

function Contact() {
  return (
    <div id='body'>
      <h2>Research</h2>
        <Details />
    </div>
  );
}


function Details() {
  return (<Fragment>
    <div>
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
    </div>
  </Fragment>);
}



export default Contact;
