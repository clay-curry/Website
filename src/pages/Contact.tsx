import React from 'react';
import '../styles/style.css';

import { Footer, NavBar, PageBody} from '../components';

function Contact() {
  return (<>
    <NavBar/>
    <PageBody>
      <ContactInfo />
    </PageBody>
    <div style={{height: '200px'}}>{/* Spacer */}</div>
    <Footer />
    </>);
}


function ContactInfo() {
  return (<>
    <h2>Contact</h2>
    <p> I'm currently based in Norman, Oklahoma; however, I am a citizen of the blue planet and eager to discuss opportunities anywhere on Earth. You can reach out to 
      me at <a href="mailto:claycurry34@gmail.com">claycurry34@gmail.com</a>.</p>
    </>)
}

export default Contact;