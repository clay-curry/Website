import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css'
import '../styles/component.css'

import { Footer, MoreComing, NavBar, PageContent } from '../components';

var Latex = require('react-latex');

function Research() {
  return (<>
    <NavBar/>
    <PageContent>
      <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet"/>
      <h2>Research</h2>
      <Statement />
      <hr />
      <Keywords />
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}
const gdl="https://geometricdeeplearning.com/"
const databook="http://databookuw.com"
const pde="https://arxiv.org/abs/2209.04934"
const brunton="https://www.youtube.com/watch?v=7n7xaviepKM"
const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
const geoff="https://twitter.com/geoffreyhinton/status/1469842971721965568?s=20&t=6n-544KdFG1aKZRuWgN-lQ"
const object_representation="https://yilundu.github.io/ndf/"
  
function Statement() {
  
  const e3 = `$E(3) = SO(3) \\ltimes \\mathbb{R}^3$`
  return (<Fragment>
      <p>
        In a Masters or Ph.D. setting, I would love to deepen my understanding of <a href={gdl}>geometric deep learning</a> in the context of <a href={databook}>data-driven simulations</a> of 
        physical systems, with cross-disciplinary applications in meterology, organic chemistry, materials science, and/or robotics. It would not be wrong to say my 
        interests are in machine learning for physics and <i>the physics of machine learning</i> (i.e. geometric deep learning).
      </p>
      <p>At a high level, geometric deep learning gives a mathematical framework to study the most successful neural network architectures, by considering each architecture from the view of its symmetries. 
        For instance, convolutional neural networks can be thought of as universally-approximating translation equivariant maps, RNNs learn time-shift equivariant maps, transformers have permutation 
        equivariance, and graph neural networks can be made to model <Latex>{e3}</Latex> equivariant systems. Much like the physical sciences, symmetry is a general principle from which future architectures may be constructed. 
        On the  other hand, Physics-Informed Machine Learning involves using prior knowledge (e.g. governing equations, constraints, symmetries) and observations (e.g. measured, simulated) to better model dynamical 
        systems and generate novel solutions to difficult control problems.
      </p>
      <p>
        Some of my favorite papers in this area include learning <a href={object_representation}>equivariant representations of objects</a> for robot-object manipulation 
        (<a href={geoff}>Hinton approved</a>), leveraging Clifford algebras to <a href={pde}>improve models of certain difficult initial value problems</a>, and learning to predict 
        the discrepancies of first-principle models of partially observable dynamical system <a href={brunton}>for data-driven optimal control</a>.
      </p>
      <br />

  </Fragment>);
}

function Keywords() {
  return(<Fragment>
      <h3>Key Words</h3>
      <div className='keywords'>
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


function Longer(){
  return (<><h3>My Interests (longer version)</h3>
  <p>
  I developed my interest in <a href={gdl}>Geometric Deep Learning</a> in the semester following my first encounter with group theory (the mathematical
  study of symmetry), through an assigned technical report on Cohen & Welling's, <i><a href={gcnn}>Group Equivariant Convolutional
  Networks</a></i>. Since their publication, a number of follow-on works have pushed the deep learning community closer to the goal 
  of general (universally approximating) equivariant models capable of respecting arbitrary symmetries (e.g. <i>SO(3)</i>, <i>SE(3)</i>, 
  <i>E(n)</i>, and other Lie groups) of arbitrary data (multi-vector valued graphs) living in almost-arbitrary manifolds (e.g. vector 
  space of R^n, the n-dimensional sphere) called homogenous spaces. Equivariant networks which operate on data projected onto a harmonic 
  basis with symmetries of the data expressed in their irreducible representations are, in recent literature, called "Steerable Neural 
  Networks". 
  </p>
  <br />
  </>);
}


export default Research;