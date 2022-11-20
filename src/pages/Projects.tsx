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
  const rhel = "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
  const phyast = "https://ou.edu/cas/physics-astronomy"
  const crawler = "https://github.com/claycurry34/Python-Web-Crawler"
  return (<Fragment>
      <hr />
      <h3>Work Experience</h3>
      <ul className='experience-item'>
        <tr><a href={oadii}>OADII</a> Partnership</tr>
        <tr>Research Assistant | NOV 2021 - Present</tr>
        <tr>
          <p>Gained a fundamental understanding of algorithms for object tracking in aerospace and automotive 
          systems, including Bayesian methods and computer vision Visual, Radar, and LiDAR detections.
          Partnership with <a href={oadii}>OK Air Defense Innovation Institute</a> under the advisement of Professor <a href={hougen}>Dean Hougen</a>.</p>
          <p>
            <b>Key Achievement:</b> Applied neural-architecture-search principles to learn an ensemble of transformer networks for recognizing basic flight maneuvers <Colab href={colab_transformer} />
          </p>
          
          <p>
            <b>Key Achievement:</b> Scraped over 50,000,000 transponder messages (source: <a href={exch}>adsbexchange</a>) in one weekend, likely from every aircraft in the continental United States, then stored to a relational database. <GitHub href={github_transponder} />
          </p>
            
        </tr>
      </ul>
      <ul className='experience-item'>
        <tr>OU <a href={phyast}>Physics and Astronomy</a></tr>
        <tr>Sysadmin Assistant | FEB 2021 - FEB 2022</tr>
        <tr>
          <p>
            Fostered relationships with researchers and staff members to understand their computational needs, assist with administering servers, services, infrastructure.
          </p>
          <p>
            <b>Key Achievement:</b> Developed a recursive web crawler in Python for flagging broken website links, discovering inconsistent info (phone numbers, office numbers), and verifying alt-text on over 200 webpages. <GitHub href={crawler} />
          </p>
            <p>
            <b>Key Achievement:</b> Scripted a variety of sysadmin related tasks in the <a href={rhel}>Red Hat Enterprise Linux</a> operating system. This included remote 
            inventory-taking (detecting axillary devices remotely), uptime monitoring, and event logging.
            </p>
        </tr>
      </ul>
  </Fragment>);
}

export default Projects;
