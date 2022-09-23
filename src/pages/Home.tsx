import React from 'react';
import '../styles/style.css';
import { NavBar, Hero, Footer, PageContent, ContactBtn, MoreComing } from '../components';

function Home() {
  const hougen = "https://www.ou.edu/coe/cs/people/hougen";
  const partnership = "https://ou.edu/research-norman/news-events/2020/oc-alc-teams-up-with-ou-on-educational-partnership-agreement";
  return (
    <>
      <NavBar />
      <Hero />  
      <PageContent>
        <h2>My Journey</h2>
        
        <p>
          I'm a US-based deep learner, math obsessed software engineer, and German Sheppard dad. I also happen to be an undergraduate research 
          assistant under the wing of <a href={hougen}>Dr. Dean Hougen</a> working with engineers from the <a href={partnership}>Oklahoma City Air
          Logistics Complex (76 SWEG)</a> on projects geared towards information fusion in object-tracking sensor networks.
        </p>

        <p>
          My interests are in machine learning broadly, but I 
          have taken interest in special topics described here on my website. Above all, my interests are in creating and sharing technologies that 
          democratize knowledge/research, maximize research productivitiy, protect national security, and improve environmental quality. 
        </p>
        <p>
          I'm also seeking full-time opportunities starting in December (my expected graduation date), which are likely to be stepping stones into 
          graduate school (though I am perfectly fine with taking a gap semester, or several). If anything here looks interesting, <i>please</i> reach out to get in touch!
        </p>

        <ContactBtn />
        <MoreComing />
        
      </PageContent>  
      <Footer />
    </>
  );
}

export default Home;
