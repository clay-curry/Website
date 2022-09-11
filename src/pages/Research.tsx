import React, { Fragment } from 'react';
import '../styles/page.css';
import '../styles/research.css'

function Research() {
  return (
    <div id='body'>
      <h2>Research</h2>
        <Statement />
        <hr></hr>
        <Keywords />
        <OKC_ALC />
    </div>
  );
}

function Statement() {
  const gdl="https://geometricdeeplearning.com/"
  const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
  const follow_on="https://scholar.google.com/scholar?start=0&q=networks+equivariance,+OR+equivariant&hl=en&as_sdt=0,37"
  const geoff="https://twitter.com/geoffreyhinton/status/1469842971721965568?s=20&t=6n-544KdFG1aKZRuWgN-lQ"
  const architectures="https://arxiv.org/pdf/2203.06153.pdf"
  return (<Fragment>
      <h3>Interests</h3>
      <p>
        Through a masters or PhD program, I would like to explore the space of  <b>geometric deep learning</b> and 
        <b> physics-informed machine learning</b> (PIML) in partially observable, uncertain and/or high-dimensional contexts. 
        Some (nowhere near all) applications where these two fields overlap include multiple object tracking, dynamical and
        control systems, automotive radar, biomedical sensor, remote sensing, weather/atmospheric radars.
      </p>
      <p>
      I found my interest in <a href={gdl}>Geometric Deep Learning</a> in the semester following my first encounter with Group Theory (MATH 4323), i.e. the mathematical study of symmetry,
      through the works of Cohen and Welling's, "<a href={gcnn}>Group Equivariant Convolutional Networks</a>."  Since their publication, a number of <a href={follow_on}> follow-on works</a> on equivariant networks extended the traditional convolutional networks to arbitrary symmetry-aware neural networks, with applications particularly 
      in robotics and <a href={architectures}>the physical sciences</a>. In remote-sensing radar, for instance, a temporal graph can be used to model problems involving a set of detections where edges represent distances between detections, suffienct for modeling kinematic features 
      useful for modeling the aircraft type, mesoscale meteorology, or even intentions of the pilot. If that wasn't convincing enough, equivariance is also 
      <a href={geoff}> Geoff approved</a>.
      </p>
      <br />
      <br />

  </Fragment>);
}

function Keywords() {
  return(<Fragment>
      <h3>Key Words</h3>
      <div className='keywords'>
      <div>Physics Informed ML</div>
      <div>Symmetry Aware ML</div>
      <div>Data Efficient ML</div>
      <div>Control and Robotics</div>
      <div>Control and Robotics</div>
      <div>Object Tracking</div>
      <div>Graph Neural Networks</div>
      </div>
  </Fragment>)
}

function OKC_ALC() {
  const adsb="https://www.faa.gov/nextgen/programs/adsb/"
  const oadii="https://www.ou.edu/oadii"
  return (<Fragment>
      <hr />
      <h3>Prior Experience</h3>
      <ul className='experience-item'>
        <tr><span className='date'>Nov 2021 - Present</span></tr>
        <tr></tr>
        <span className='job'>Undergraduate Research Assistant with <a href={oadii}>SWEG-76</a></span>
      </ul>
      <p>
        Being with the Oklahoma Aerospace and Defense Innovation Institute for the last year has allowed me to explore the fundamentals of 
        dynamical systems for modeling single maneuvering objects. Early on, I helped with various tasks related to data fusion, namely by
        creating data-scraping tools capable of storing millions of <a href={adsb}>ADS-B messages</a>. Our work touched some interesting 
        areas early areas in deep learning, including single object state esimation under random markovian jumps (where the motion model
        undergoes abrupt changes).
      </p>
  </Fragment>);
}

export default Research;