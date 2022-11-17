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
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        <tr>Computer Science Research Assistant with <a href={oadii}>SWEG-76</a></tr>
        <tr>NOV 2021 - Present</tr>
        <tr>
          <p>In this work, I helped research algorithms for classifying basic flight maneuvers in object-tracking sensor networks.</p>
          <p>
            <b>Key Achievement:</b> Scraped a massive dataset of <a href={exch}>citizen-sourced transponder messages</a>, intercepting more than 70,000,000 (seventy-million) messages 
            in one weeked from all flights in the continental United States. 
            </p>
            <p>
            <b>Key Achievement:</b> Developed two sequence-to-sequence machine learning algorithms capable of recognizing the occurence of basic flight 
            maneuvers (takeoff, orbit, turning, landing) in simulated aircraft trajectories. I solved this problem twice using two highly different approaches: using a 3D convolutional neural network 
            (similar to VoxelNet), and using an encoder-only transformer with bi-directional self-attention.
            </p>
        </tr>
      </ul>
      <ul className='experience-item'>
        <tr>Red Hat Enterprise Linux System Administrator Assistant</tr>
        <tr>FEB 2021 - FEB 2022</tr>
        <tr>
          <p>In this work, I gained hands-on experience fulfilling the research and web-communication needs of faculty in OU's Department of Physics.</p>
          <p>
            <b>Key Achievement:</b> Developed numerous Bash scripts for a variety of system administration tasks in the Red Hat Enterprise Linux (RHEL) operating system. This included remote 
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
