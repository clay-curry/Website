import React, { Fragment } from 'react';
import '../styles/style.css';

function Research() {
  return (
    <div id='body'>
      <h2>Research</h2>
        <Statement />
        <Keywords />
    </div>
  );
}

function Statement() {
  return (<Fragment>
      <h3>About me</h3>
      <p>
        I am an undergraduate Computer Science student at the University of Oklahoma with plans to graduate in December 2022.
        I have a serious passion for all open problems in the mathematical foundations of learning algorithms and particularly in the subject of robustness and generalization of novel deep learning architectures.
      </p>
      <p>
        My most recent work has focused on applications of deep learning for multiple object tracking in aerial monitoring.
      </p>  
  </Fragment>);
}

function Keywords() {
  return(<Fragment>
      <h4>Key Words</h4>
      <div className='keywords'>
      <div>Learning Algorithms</div>
      <div>Robustness</div>
      <div>Object Tracking</div>
      <div className="break"></div>
      <div>Equivariant Deep Learning</div>
      <div>Graph Neural Networks</div>
      </div>

  </Fragment>)
}


export default Research;
