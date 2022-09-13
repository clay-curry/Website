import React, { Fragment } from 'react';
import ContactMe from '../components/ContactBtn';

import '../styles/page.css';

function Home() {
  
  return (
    <>
      <div id='body'>
        <Paragraph />  
      </div>
    </>
  );
}

function Paragraph() {
  const partnership = "https://ou.edu/research-norman/news-events/2020/oc-alc-teams-up-with-ou-on-educational-partnership-agreement";
  return (<Fragment>
    <h2>Hello</h2>
    <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
    <p>
    I am an undergraduate research assistant in the School of Computer Science at the University of Oklahoma collaborating with 
    software engineers from the <a href={partnership}>OC-ALC's 76th Software Engineering Group</a> working under the supervision 
    of Interim Director Dr. Dean Hougen.
    </p>

    <p>I'm currently seeking full-time opportunities for a start date in December, which are likely to be stepping stones into 
      graduate school, preferrably in a position that intersects machine learning and sensor networks. Please reach out with any 
      requests!</p>

    <ContactMe />
    <hr />
    <h4>More Coming</h4>
    <p>I'm just getting started with this website (and extremely busy with classes), but more is on its way. I will be open-sourcing a some personal 
      projects for demonstration on GitHub, so follow me on GitHub!</p>

    </Fragment>
  );
}

export default Home;
