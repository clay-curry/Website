import React, { Fragment } from 'react';
import '../styles/style.css';

function Research() {
  return (
    <div id='body'>
      <h2>Statement of Purpose</h2>
        <Statement />
        <hr></hr>
        <Keywords />
        <OKC_ALC />
    </div>
  );
}

function Statement() {
  return (<Fragment>

      <p>
      To dedicate one's life to research is to add a stanza of consecrate Truth to <a href="https://www.haydenplanetarium.org/tyson/essays/1998-03-the-greatest-story-ever-told.php">the greatest story ever told</a>, 
      to fulfill the aim of the giants whose names never even made the list, and (at times) give up one's own interests (usually sleep) for an uncertain chance of bringing value to the lives of people we will never meet.
      </p>
      
      <p>
      Through a PhD program, I would like to explore the space of physics-informed machine learning algorithms that combine <a href="">a set of governing equations</a> together with knowledge
      <a href="https://geometricdeeplearning.com/"> symmetries</a> (tranlations, rotations) of the system. These two elements give a sufficient framework for using experimental data to model thediscrepency modeling of control systems to estimate physically consistent
      solutions to problems that are either too difficult to model exactly or in situations where training end-to-end is too costly.

      My interest in physics-informed learning algorithms started with my mathematical interst in <a href="https://proceedings.mlr.press/v48/cohenc16.html">group equivariant convolutional networks</a>.
      More recently, some constructions of <a href="">graph neural networks equivariant under the action of E(3)</a> (rotations and translations), extending group equivariance for Graph Neural Networks (GNNs), 
      which are interesting in their own right.
      In object-detecting radar, for instance, a set of detections can form temporal graph wherein edges contain structure suffienct for modeling kinematic features, wherein kinematic features contain 
      structure suffienct for modeling the aircraft type, mesoscale meteorology, or even intentions of the pilot.
      </p>

      <p>
      Being with the <a href="https://www.ou.edu/oadii">Oklahoma Aerospace and Defense Innovation Institute</a> for the last year has allowed me to develop an understanding of the fundamentals of equivariant neural
      networks while simultaneously learning fundamentals of dynamical systems in the domain of air-space monitoring systems with its many interesting Bayesian nuances of multiple object tracking. I would be exicited
      to pursue further applications of these things and sharing my work with colleagues. I'm currently seeking full-time career positions post-graduation, particularly in the area of sensors, so please reach out with any requests!
      </p>
      <a rel="contact" href="/contact/" className="contact-button">
        <div> 
        <span className="bg"></span> 
        <span className="base"></span> 
        <span className="text">
          Contact me!
        </span>
        </div> 
      </a>
      
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
