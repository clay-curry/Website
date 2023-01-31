import React from 'react';
import '../styles/style.css';
import { Footer, NavBar, PageContent } from '../components';

function Contact() {
  return (<>
    <NavBar/>
    <PageContent>
    <h2>Contact</h2>
    
    <p>
      I'm currently based in Norman, Oklahoma, but I am open to potential opportunities anywhere on Earth. You can reach out to 
      me at <a href="mailto:claycurry34@gmail.com">claycurry34@gmail.com</a>.
    </p>
    
    </PageContent>
    <div className="gap"></div>
    <Footer />
    </>);
}


export default Contact;
