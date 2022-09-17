import React, { Fragment } from 'react';
import '../styles/style.css';
import { Footer, MoreComing, NavBar, PageContent } from '../components';

function Contact() {
  return (<>
    <NavBar/>
    <PageContent>
    <h2>Contact</h2>
    <div className='contact-info'>
      <div>
        <h4>Location</h4>
        <p>
          Mailing Address:
          <div>206 W Johnson St</div>
          <div>Norman, OK 73069</div>     
        </p>
      </div>
      <div>
        <h4>Electronic</h4>
        <p>
          Email:
          <div><a href="mailto:claycurry34@gmail.com">claycurry34@gmail.com</a></div>
          Phone:
          <div><a href="tel:405-301-1055">405-301-1055</a></div>
        </p>
      </div>

    </div>
    </PageContent>
    <div className="gap"></div>
    <Footer />
    </>);
}


export default Contact;
