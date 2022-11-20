import React from 'react';
import '../styles/style.css';
import { Footer, NavBar, PageContent } from '../components';

function Contact() {
  return (<>
    <NavBar/>
    <PageContent>
    <h2>Contact</h2>
    <iframe title="contactMe" src="https://docs.google.com/forms/d/e/1FAIpQLScN8BLSyHxDOxaM7RBrMjw4IVt8Jm0SQF6lmqP8-sHF7djqbg/viewform?embedded=true" >Loading…</iframe>
    </PageContent>
    <div className="gap"></div>
    <Footer />
    </>);
}


export default Contact;
