import React from 'react';
import '../styles/style.css';
import { NavBar, Hero, Footer, PageContent, ContactBtn, MoreComing } from '../components';

function Home() {
  const partnership = "https://ou.edu/research-norman/news-events/2020/oc-alc-teams-up-with-ou-on-educational-partnership-agreement";
  return (
    <>
      <NavBar />
      <Hero />  
      <PageContent>
        <h2>My Journey</h2>
        
        <p>
          I'm a US-based technologist, mathematics-obsessed software engineer, deep learner, and German Sheppard master. My interests are in creating and 
          democratizing technologies and systems that maximize human wellbeing, scientific discovery, national security, environmental quality, and economic prosperity.
        </p>
        <p>
          Right now, I am an undergraduate research assistant for <a href="https://www.ou.edu/coe/cs/people/hougen">Dr. Dean Hougen</a>, director of the School of Computer Science at the University of Oklahoma.
          Lately we have been working with engineers from the <a href={partnership}>Oklahoma City Air Logistics Complex (76 SWEG)</a> on projects
          geared towards information fusion in object-tracking sensor networks.
        </p>

        <p>
          I'm also seeking full-time opportunities starting in December (my expected graduation date), which are likely to be stepping stones into 
          graduate school (though I am perfectly fine with taking a gap semester, or several). My interests are in machine learning broadly, but I have taken interest in special topics described here on my website. If anything here looks interesting, <i>please</i> reach out (yes you) to get in touch!
        </p>

        <ContactBtn />
        <MoreComing />
        
      </PageContent>  
      <Footer />
    </>
  );
}

export default Home;
