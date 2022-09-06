import React, { Fragment } from 'react';
import '../styles/style.css';

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
    return (<Fragment>

        <h4>United States <a href="https://www.ou.edu/oadii/news-events/2022/ou-oc-alc-strengthen-partnership-with-cooperative-research-and-development-agreement">OKC Air Logistics Complex</a> : Sustainment and Modernization : </h4>
          <p>
            With sofware engineers at the OKC ALC, I helped with various tasks related to modernizing <a href="https://www.faa.gov/air_traffic/technology/tbo/">multisource-multitarget information fusion</a>, employing a class of algorithms and tools collectively known as "deep learning."
          
            Such algorithms are favored for their ability continuously improve from examples by effectively self-learning patterns in data.
            For producing this data, we developed our own physics simulator (I had little role in making this) and we created data-scraping tools capable of storing millions of <a href="https://www.faa.gov/nextgen/programs/adsb/">ADS-B messages</a> (this was my baby).
            Our work touched some of the most important areas in deep learning, including interpretability (explanation generation), human-computer interaction (quantifying uncertainty), extracting information from sequential data, robustness, and learning under noise and class imbalance (recognizing uncommon aircraft types).
          </p>
          <h4>More Coming</h4>
      <p>I'm just getting started, but more is on its way. If you want to see more, you can follow me on GitHub!</p>
    </Fragment>);
  }



export default Projects;
