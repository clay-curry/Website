import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css';
import { Footer, MoreComing, NavBar, PageContent, Colab, GitHub } from '../components';

function Projects() {
  return (
  
  <>
    <NavBar/>
    <PageContent>
      <h2>Projects</h2>
        <Blog />
        <Software />
        <Work />  
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}


function Blog() {
  return (<Fragment>
      <hr />
      <h3>Blogs</h3>
  </Fragment>);
}

function Software() {
  return (<Fragment>
      <hr />
      <h3>Software</h3>
  </Fragment>);
}

function Work() {
  const exch="https://globe.adsbexchange.com/"
  const oadii="https://www.ou.edu/oadii"
  const hougen = "https://www.ou.edu/coe/cs/people/hougen";
  const colab_transformer="https://colab.research.google.com/drive/19UY_igQUPTVfsVWNlHAQFl-WjoJ_VOwb?usp=sharing"
  const github_transponder="https://github.com/claycurry34/Flight-Transponder-Dataset"
  const phyast = "https://ou.edu/cas/physics-astronomy"
  const crawler = "https://github.com/claycurry34/Python-Web-Crawler"
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        
      <tr>AI/ML Research Assistant</tr>
        <tr>Partnership with OADII | NOV 2021 - Present</tr>
        <tr>
          <p>Partnership with <a href={oadii}>OK Air Defense Innovation Institute</a> under the advisement of Professor <a href={hougen}>Dean Hougen</a>.
          Studied algorithms for object tracking, sensor fusion, and computer vision in aerospace and automotive systems. 
          </p>
          <p>
            <b>Key Achievement:</b> Applied neural-architecture-search principles to learn an ensemble of transformer networks for recognizing basic flight maneuvers <Colab href={colab_transformer} />
          </p>
          
          <p>
            <b>Key Achievement:</b> Scraped over 50,000,000 transponder messages (source: <a href={exch}>adsbexchange</a>) in one weekend, likely from every aircraft in the continental United States, then stored to a relational database. <GitHub href={github_transponder} />
          </p>
            
        </tr>
      </ul>
      <ul className='experience-item'>
        <tr>Red Hat Enterprise Linux System Admin Assistant</tr>
        <tr>OU Physics and Astronomy | FEB 2021 - FEB 2022</tr>
        <tr>
          <p>
            Provided assistance to the <a href={phyast}>Homer L. Dodge Department of Physics and Astronomy</a> on numerous technical infrastructure projects and gained expertise administering servers/services/infrastructure and resolving technical issues.
          </p>
          <p>
            <b>Key Achievement:</b> Developed a recursive web crawler in Python for flagging broken website links, discovering inconsistent info (phone numbers, office numbers), and verifying alt-text on over 200 webpages. <GitHub href={crawler} />
          </p>
        </tr>
      </ul>
  </Fragment>);
}

export default Projects;
