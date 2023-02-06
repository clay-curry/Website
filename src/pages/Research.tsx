import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/component.css'

import { Footer, MoreComing, NavBar, PageBody } from '../components';

function Research() {
  return (<>
    <NavBar/>
    <PageBody>
      <Statement />
      <Keywords />
      <MoreComing />
    </PageBody>
    <Footer />
    </>);
}

  
function Statement() {
  const gdl="https://geometricdeeplearning.com/"
  return (<Fragment>
    <h2>Research Statement</h2>
      <p>
      In machine learning, a delicate balance must be struck between two extremes of overfitting: blindness to underlying 
      patterns in data and hallucination of non-existent patterns. Bias, the tendency to overlook patterns, and variance, 
      the tendency to generate false patterns, play critical roles in this balance. The objective of a learning algorithm 
      is to achieve a balance of bias and variance that accurately reflects the patterns present in data. The efficacy of 
      the learning process is determined by the interplay between the quantity of data and the number of hypotheses considered. 
      </p>
      <p>
        My research goal is to help develop a unified theory of geometrically-inspired inductive-biases in the context of 
        pattern recognition and neural network design. Naturally, this goal has fueled my interest in the lineage of research
        often garnered as "<a href={gdl}>Geometric Deep Learning</a>"" (GDL), which attempts to leverage underlying symmetries 
        of the objective function to define the most common and successful neural architectures from a set of first principles 
        and construct new architectures with application-motivated inductive biaes. Towards this unifying goal, I have recently 
        explored the application of these principles in the aerospace industry, in which I have developed an algorithm for 
        autonomous flight maneuver identification. 
      </p>
      <hr />

  </Fragment>);
}


function Keywords() {
  return(<Fragment>
      <h3>Key Words</h3>
      <div className='keywords'>
      <div>Geometric Deep Learning</div>
      <div>Geometry</div>
      <div>Symmetry</div>
      <div>Algebra</div>
      <div>Multiple Object Tracking</div>
      <div>Physics Informed ML</div>
      <div>Data Efficient ML</div>
      <div>Dynamical Systems and Optimal Control</div>
      </div>
      
  </Fragment>)
}

export default Research;