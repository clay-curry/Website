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
      Through a PhD program, I would like to explore the design space of physics-informed machine learning algorithms that <a href="">incorporate knowledge of physical laws</a> with prior knowledge of a group of 
      <a href="https://geometricdeeplearning.com/">symmetry transformations</a> of the governing equations. These two elements give a sufficient framework for using experimental data to model thediscrepency modeling of control systems to estimate physically consistent
      solutions to problems that are either too difficult to model exactly or in situations where training end-to-end is too costly.

      My interest in physics-informed learning algorithms started with my mathematical interst in <a href="https://proceedings.mlr.press/v48/cohenc16.html">group equivariant convolutional networks</a>.
      More recently, several constructions of equivariant neural networks have been proposed, notably, for the class of models known as Graph Neural Networks (GNNs).
      In object-detecting radar, for instance, a set of detections can form temporal graph wherein edges contain structure suffienct for modeling kinematic features, wherein kinematic features contain 
      structure suffienct for modeling the aircraft type, mesoscale meteorology, or even intentions of the pilot.
      </p>

      <p>
      Being with the <a href="https://www.ou.edu/oadii">Oklahoma Aerospace and Defense Innovation Institute</a> for the last year has allowed me to develop an understanding of the fundamentals of equivariant neural
      networks passion while also gaining domain knowledge of air-space monitoring systems and the many interesting nuances of multiple object tracking. These are topics I am highly interested in bringing to future 
      research and sharing with colleagues. I'm currently seeking full-time career positions post-graduation, particularly in the area of sensors, so please reach out for inquiries!
      </p>
      
  </Fragment>);
}

function Keywords() {
  return(<Fragment>
      <h4>Key Words</h4>
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
      <h3>Undergraduate Research Assistant with <a href="https://www.ou.edu/oadii">SW-76</a></h3>
        <p>
          Early on, I helped with various tasks related to data fusion, namely by creating data-scraping tools capable of storing millions of <a href="https://www.faa.gov/nextgen/programs/adsb/">ADS-B messages</a> (this was my baby).
          Our work touched some of the most important areas in deep learning, including interpretability (explanation generation), human-computer interaction (quantifying uncertainty), extracting information from sequential data, robustness, and learning under noise and class imbalance (recognizing uncommon aircraft types).
        </p>
      <hr />
      <h4>More Coming</h4>
    <p>I'm just getting started (and extremely busy with my last sememster), but more is on its way. If you want to see more, you can follow me on GitHub!</p>
  </Fragment>);
}

export default Research;
