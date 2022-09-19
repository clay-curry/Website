import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css';
import { Footer, MoreComing, NavBar, PageContent } from '../components';

function Projects() {
  return (
  
  <>
    <NavBar/>
    <PageContent>
      <h2>Projects</h2>
       <Work />  
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}


function Work() {
  const exch="https://globe.adsbexchange.com/"
  const oadii="https://www.ou.edu/oadii"
  const adsb = "https://globe.adsbexchange.com/"
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        <tr>Undergraduate Research Assistant with <a href={oadii}>SWEG-76</a></tr>
        <tr>Dec 2021 - Present</tr>
        <tr><p>Early on, I implemented a set of data-scraping tools for aggregating transponder (<a href={adsb}>ADS-B</a>) messages on a global 
            scale. My tool was able to intercept more than 10,000,000 messages within 48 hours. Achieving this feat required nothing more than
            becoming a "human transpiler," for client-facing Javascript code at <a href={exch}>ADSB Exchange</a>, which I converted into equivalent
            Python requests and SQL transactions.
            </p><p>More recently, I have been conducting reviews of primary and secondary sources in the object tracking literature. My latest work is 
              geared toward single object tracking in clutter and under random markovian jumps (where object dynamics rapidly and unexpectedly change).</p></tr>
      </ul>
  </Fragment>);
}


export default Projects;
