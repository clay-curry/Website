import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/component.css';
import logo from "../assets/C_512.png"
import cube from "../assets/cube.png"
import { Footer, MoreComing, NavBar, PageBody, JupyterBook, GitHub, ExperienceItem, BadgeRow } from '../components';

function Experience() {
  return (
  
  <>
    <NavBar/>
    <PageBody>
      <h2>Experience</h2>
        <PersonalProjects />
        <WorkExperience />
      <MoreComing />
    </PageBody>
    <Footer />
    </>);
}

function PersonalProjects() {
  const book_repo="https://github.com/claycurry34/Deep-Learning-Book"
  const book_site="https://math.claycurry.com/"
  const github_website="https://github.com/claycurry34/Website"

  return (<>
      <hr />
        <h3>Personal Projects</h3>
        <ul>
        <li><ExperienceItem 
          heading="This Website"
          subheading="React JS + Google Cloud Platform | Mar 2022 - Current"
          image={logo}
          alt="blackboard C">
            <BadgeRow>
              <GitHub href={github_website} />
            </BadgeRow>
        </ExperienceItem></li>

        <li><ExperienceItem 
          heading="At the Interface of Fourier Analysis and Neural Networks"
          subheading="Jupyter Book + Self Study | Oct 2022 - Current"
          image={cube}
          alt="Rubik's Cube">
            <BadgeRow>
              <GitHub href={book_repo} />
              <JupyterBook href={book_site} /> 
              </BadgeRow>
        </ExperienceItem></li>        
        </ul>
        
      </>);
}

function WorkExperience() {
  const exch="https://globe.adsbexchange.com/"
  const oadii="https://www.ou.edu/oadii"
  const hougen = "https://www.ou.edu/coe/cs/people/hougen";
  const github_transponder="https://github.com/claycurry34/Flight-Transponder-Dataset"
  const crawler = "https://github.com/claycurry34/Python-Web-Crawler"
  return (<Fragment>
      <hr />
      <h3>Professional Experience</h3>
      
      <ExperienceItem
        heading="AI/ML Research Assistant"
        subheading={<div><a href={oadii}>OADII</a> Partnership | Nov 2021 - Dec 2022</div>}
      >
        <div>
        <p>Partnership with <a href={oadii}>OK Air Defense Innovation Institute</a> under the advisement of Professor <a href={hougen}>Dean Hougen</a>.
        Studied algorithms for object tracking, sensor fusion, and computer vision in aerospace and automotive systems. Designed and implementing data 
        scraping tools and scientific plots/animations, as well as synthesizing novel learning algorithms for flight maneuver identification.
        </p>
        <p>
          <b>Key Achievement:</b> Currently in the submisson process on a research paper (me as first author) that will be submitted to the 2022 International Conference on Harmonic Analysis and Applications. 
        </p>
        <p>
          <b>Key Achievement:</b> Successfully deployed a Python-based web scraper that recorded over 70 million aircraft transponder messages in one March weekend, likely from every aircraft in the continental United States. (source: <a href={exch}>adsbexchange</a>) <GitHub href={github_transponder} />
        </p>
        </div>
      </ExperienceItem>

      <ExperienceItem
        heading="Red Hat Enterprise Linux System Admin Assistant"
        subheading="OU Physics and Astronomy | Feb 2021 - Feb 2022"
        >
          <div>
          <p>
            I helped in a broad range of tasks to fulfill various functional and nonfunctional requirements for a RHEL computer network. This involved providing system-facing and people-facing services, such as troubleshooting, scripting tasks, and maintaining documentation.
          </p>
          <p>
            <b>Key Achievement:</b> Developed a recursive web crawler in Python for flagging broken website links, discovering inconsistent info (phone numbers, office numbers), and verifying alt-text on over 200 webpages. <GitHub href={crawler} />
          </p>
          </div>
        </ExperienceItem>
  </Fragment>);
}

export default Experience;
