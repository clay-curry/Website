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
  const osn = "https://opensky-network.org/"
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        <tr>Undergraduate Research Assistant with <a href={oadii}>SWEG-76</a></tr>
        <tr>Dec 2021 - Present</tr>
        <tr>
          <p>
            Early on, I implemented a set of web-scraping tools for aggregating citizen-sourced transponder messages (<a href={adsb}>ADS-B</a>) on a global 
            scale, intercepting more than 10,000,000 (ten-million) messages served by <a href={exch}>ADSB Exchange</a> within 72 hours, which I saved to my own 
            SQL-like database. Achieving this feat required nothing more than translating client-facing Javascript code into equivalent Python requests and SQL 
            transactions. I later realized that researchers at <a href={osn}>OpenSkyNet</a> have been collecting, storing, and sharing this type of data (and
            more) for years, thus my efforts resulted in nothing more than a learning lesson.
            </p>
            <p>
            More recently, I have been getting my feet wet in primary and secondary literature in the decades-old science of multiple object tracking. On a 
            simultaneous front, I have been adapting open-source software projects, including state-of-the-art tracking algorithms such as the Gaussian-Mixture 
            Probability Hypothesis Density filter.
            </p>
        </tr>
      </ul>
  </Fragment>);
}


export default Projects;
