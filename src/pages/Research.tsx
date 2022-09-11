import React, { Fragment } from 'react';
import '../styles/page.css';

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
  const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
  
  return (<Fragment>
      <h3>Statement of Purpose (summary)</h3>
      
      <p>
      Through a masters or PhD program, I would like to explore the space of <b>physics-informed machine learning</b>(PIML) and <b>geometric deep learning</b>(GDL) in partially observable, uncertain and/or high-dimensional contexts. Applications of interest 
      include: multiple object tracking, automotive radar, biomedical sensor, remote sensing, weather/atmospheric radars.

      My interest in GDL started with my mathematical interest in Abstract Algebra. then Artificial Neural Networks and Evolution. 
      To put it simply, equivariance is a property of any operator function

      More recently, these ideas have been extended for Graph Neural Networks (GNNs) in the <a href="">graph neural networks equivariant under the action of E(3)</a> (rotations and translations), extending group equivariance 
      which are interesting in their own right.
      In object-detecting radar, for instance, a set of detections can form temporal graph wherein edges contain structure suffienct for modeling kinematic features, wherein kinematic features contain 
      structure suffienct for modeling the aircraft type, mesoscale meteorology, or even intentions of the pilot.
      </p>

      <p>
      To dedicate one's life to research is to add a stanza of consecrate Truth to <a href="https://www.haydenplanetarium.org/tyson/essays/1998-03-the-greatest-story-ever-told.php">the greatest story ever told</a>, 
      to fulfill the aim of the giants whose names never even made the list, and (at times) give up one's own interests (usually sleep) for an uncertain chance of bringing value to the lives of people we will never meet.
      </p>

      <p>
      Being with the <a href="https://www.ou.edu/oadii">Oklahoma Aerospace and Defense Innovation Institute</a> for the last year has allowed me to develop an understanding of the fundamentals of equivariant neural
      networks while simultaneously learning fundamentals of dynamical systems applied the domain of air-space monitoring systems. I would be exicited to pursue further applications of these things and exchange ideas
      with colleagues. </p>
          
  </Fragment>);
}

function Keywords() {
  return(<Fragment>
      <h3>Key Words</h3>
      <div className='keywords'>
      <div>Physics Informed ML</div>
      <div>Symmetry Informed ML</div>
      <div>Data Efficient ML</div>
      <div className="break"></div>
      <div>Object Tracking</div>
      <div>Graph Neural Networks</div>
      </div>
  </Fragment>)
}


function OKC_ALC() {
  return (<Fragment>
      <hr />
      <h3>Prior Experience</h3>
      <h4>Undergraduate Research Assistant with <a href="https://www.ou.edu/oadii">SWEG-76</a></h4>
        <p>
          Early on, I helped with various tasks related to data fusion, namely by creating data-scraping tools capable of storing millions of <a href="https://www.faa.gov/nextgen/programs/adsb/">ADS-B messages</a> (this was my baby).
          Our work touched some interesting areas in deep learning, such as explanation generation, human-computer interaction, under random markovian jumps (where the motion model undergoes abrupt changes).
        </p>
      <hr />
      <h4>More Coming</h4>
      <p>I'm just getting started (and extremely busy with acually getting my degree), but more is on its way. If you want to see it sooner, follow me on GitHub!</p>
  </Fragment>);
}

export default Research;
