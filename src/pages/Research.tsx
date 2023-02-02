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
        My research goal is to help develop a unified theory of geometrically-inspired inductive-biases in the construction 
        of neural networks by leveraging the symmetries of the objective functions. I am particularly interested in the field 
        of <a href={gdl}>Geometric Deep Learning</a> (GDL), where the underlying symmetries of the objective function can be 
        used to both define the most common and successful neural architectures and construct new architectures with 
        application-motivated inductive biaes. Towards this unifying goal, I have recently explored the application of these 
        principles in the aerospace industry, in which I have developed an algorithm for autonomous flight maneuver 
        identification. 
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