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
        I would love to explore the intersection of  <b> physics-informed machine learning </b> and  <b> geometric deep learning </b> in uncertain, partially observable, 
        and/or high-dimensional contexts. Topics include weather/atmospheric modeling, radar signal processing, remote sensing, and object tracking under heavy clutter and/or 
        highly non-linear dynamics.
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



export default Research;