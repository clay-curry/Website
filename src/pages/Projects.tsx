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
       <Work />  
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}


function Work() {
  const exch="https://globe.adsbexchange.com/"
  const oadii="https://www.ou.edu/oadii"
  const hougen = "https://www.ou.edu/coe/cs/people/hougen";
  const colab_transformer="https://colab.research.google.com/drive/19UY_igQUPTVfsVWNlHAQFl-WjoJ_VOwb?usp=sharing"
  const github_transponder="https://github.com/claycurry34/Flight-Transponder-Dataset"
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        <tr>Computer Science Research Assistant</tr>
        <tr>NOV 2021 - Present</tr>
        <tr>
          <p>Partnership with <a href={oadii}>OK Air Defense Innovation Institute</a> under the advisement of Professor <a href={hougen}>Dean Hougen</a>. Gained a fundamental understanding of 
          algorithms and literature on multiple object tracking using Visual, Radar, and LiDAR systems.  </p>
          <p>
            <b>Key Achievement:</b> Concieved a novel use-case of self-attention and autoregressive modeling to classify basic flight maneuvers. <Colab href={colab_transformer} />
          </p>
          
          <p>
            <b>Key Achievement:</b> Scraped a massive dataset of <a href={exch}>citizen-sourced transponder messages</a>, intercepting more than 50,000,000 (seventy-million) messages 
            in one weeked from all flights in the continental United States. <GitHub href={github_transponder} />
          </p>
            
        </tr>
      </ul>
      <ul className='experience-item'>
        <tr>Red Hat Enterprise Linux System Administrator Assistant</tr>
        <tr>FEB 2021 - FEB 2022</tr>
        <tr>
          <p>In this work, I gained hands-on experience fulfilling the research and web-communication needs of faculty at OU's Department of Physics.</p>
            <p>
            <b>Key Achievement:</b> Scripted for a variety of system administration tasks in the Red Hat Enterprise Linux (RHEL) operating system. This included remote 
            inventory-taking (detecting axillary devices remotely), uptime monitoring and logging.
            </p>
            <p>
            <b>Key Achievement:</b> Developed a recursive web crawler in Python for discovering broken website links, and flagging inconsistent information (phone numbers, office numbers) over 
            100 department webpages
            </p>
        </tr>
      </ul>
  </Fragment>);
}

export default Projects;
