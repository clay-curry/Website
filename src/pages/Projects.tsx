import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css';

function Projects() {
  return (
    <>
      <div id='body'>
      <h2>Projects</h2>
       <Work />  
      </div>
    </>
  );
}

function Work() {
  const adsb="https://globe.adsbexchange.com/"
  const oadii="https://www.ou.edu/oadii"
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        <tr>Undergraduate Research Assistant with <a href={oadii}>SWEG-76</a></tr>
        <tr>Dec 2021 - Present</tr>
        <tr><p>Early on, I implemented a set of data-scraping tools for aggregating transponder (<a href={adsb}>ADS-B</a>) messages on a global 
            scale. My tool was able to intercept more than 10,000,000 messages within 48 hours. Achieving this feat required nothing more than
            becoming a "human transpiler," converting front-end Javascript code into the equivalent Python requests and SQL statements.
            </p><p>More recently, I have been conducting reviews of primary and secondary sources in the object tracking literature. 
            The entire experience has given me the opportunity to develop analytical and practical skills, which I can transfer to any future
            research/engineering projects. Our work touched interesting areas including single object state esimation under random markovian 
            jumps (where dynamics rapidly and unexpectedly change).</p></tr>
      </ul>
      <hr />
      <h4>More Coming</h4>
      <p>I'm just getting started with this website (and extremely busy with classes), but more is on its way. I will be open-sourcing a some personal 
        projects for demonstration on GitHub, so follow me on GitHub!</p>

  </Fragment>);
}


export default Projects;
