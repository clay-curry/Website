import React, { Fragment } from 'react';
import '../styles/button.css'

function ContactMe() {
    return (
        <a rel="contact" href="/contact/" className="contact-button">
            <div> 
            <span className="bg"></span> 
            <span className="base"></span> 
            <span className="text">
            Contact me!
            </span>
            </div> 
        </a>
    );
}

export default ContactMe