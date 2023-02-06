import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/component.css';
import website_logo from "../assets/C_512.png"
import book_logo from "../assets/cube.png"
import oadii_logo from "../assets/oadii.png"
import redhat_logo from "../assets/red_hat.png"
import { Footer, MoreComing, NavBar, PageBody, JupyterBook, GitHub, ProjectItem, WorkExperience, BadgeRow } from '../components';

function Experience() {
  return (<>
    <NavBar/>
    <PageBody>
        <PersonalProjects />
        <ProfessionalExperience />
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
        <h3>Projects</h3>
        <hr />
          <ProjectItem 
          title="This Website"
          subtitle="React JS + Google Cloud Platform | Mar 2022 - Current"
          image={website_logo}
          alt="blackboard C">
            <BadgeRow>
              <GitHub href={github_website} />
            </BadgeRow>
        </ProjectItem>
        <hr />
        <ProjectItem 
          title="Symmetry, Representations, and Neural Networks"
          subtitle="Jupyter Book + Self Study | Oct 2022 - Current"
          image={book_logo}
          alt="Rubik's Cube">
            <BadgeRow>
              <GitHub href={book_repo} />
              <JupyterBook href={book_site} /> 
              </BadgeRow>
        </ProjectItem>
        
      </>);
}

function ProfessionalExperience() {
  const exch="https://globe.adsbexchange.com/"
  const oadii="https://www.ou.edu/oadii"
  const hougen = "https://www.ou.edu/coe/cs/people/hougen";
  const github_transponder="https://github.com/claycurry34/Flight-Transponder-Dataset"
  const crawler = "https://github.com/claycurry34/Python-Web-Crawler"
  const physics = "https://ou.edu/cas/physics-astronomy"
  return (<Fragment>
      <hr />
      
      <h3>Professional Experience</h3>
      <hr />
      <WorkExperience
        title="AI/ML Research Assistant"
        daterange="Nov 2021 - Dec 2022"
        organization="Oklahoma Aerospace Defense Innovation Institute"
        image={oadii_logo}
        alt="OADII Logo">
        <div>
        <p>
          Partnership with <a href={oadii}>OADII</a> under the advisement of Professor <a href={hougen}>Dean Hougen</a>. Studied tracking algorithms prevelant in aerospace surveillance systems, with emphasis on the problem of multi-source, multi-target information fusion.
        </p>
        

        <p className='achievements'><b>Key Achievements:</b></p>
          <ol>

            
        <li><p>
          Deployed a Python program that intercepted over 70 million aircraft transponder messages in one March weekend from the citizen-sourced transponder data stream hosted at <a href={exch}>adsbexchange</a>. <GitHub href={github_transponder} />
        </p>
        </li>
        <li><p>
          Currently in the submisson process on a research paper (me as first author) that will be submitted to the 2022 International Conference on Harmonic Analysis and Applications. (link soon)
        </p></li>
        </ol>
        </div>
      </WorkExperience>
      <hr />
      <WorkExperience
        title="Red Hat Enterprise Linux Assistant System Admin"
        daterange="Feb 2021 - Feb 2022"
        organization="Homer L. Dodge Physics & Astronomy Deptartment"
        image={redhat_logo}
        alt="Red Hat Logo"
        >
          <div>
          <p>
            Provided system-facing and people-facing services to deliver a broad range of functional and nonfunctional 
            requirements for a research-driven computer network internally maintained by <a href={physics}>OU's departmtent of physics and astronomy</a>.
          </p>
          <div>
            <p className='achievements'>
            <b>Key Achievements:</b>
            </p>
            <ol>        
              <li>
                <p>
                  Developed a web crawler in Python for flagging broken website links, discovering inconsistencies (phone numbers, office numbers), and verifying styling conventions on over 200 webpages. <GitHub href={crawler} />
                </p>
              </li>
              <li>
                <p>
                  Upon departure, was offered a return position upon graduation.
                </p>
              </li>
            </ol>
            </div>
          </div>
        </WorkExperience>
  </Fragment>);
}

export default Experience;
