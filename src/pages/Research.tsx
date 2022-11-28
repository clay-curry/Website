import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css'
import '../styles/component.css'

import { Footer, MoreComing, NavBar, PageContent } from '../components';

function Research() {
  return (<>
    <NavBar/>
    <PageContent>
      <h2>Research</h2>
      <Statement />
      <hr />
      <Keywords />
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}

  
function Statement() {
   
  return (<Fragment>
      <p>
      Transfer learning is a machine learning (ML) technique that enables a model to use knowledge gained from one task to solve a different but related task. This is 
      valuable in situations (e.g. medicine, path-planning, logistics) where not enough data is available to train a ML model to solve a new problem from scratch. 
      My goal is to develop new applications of transfer learning in a variety of settings, towards the goal of distilling the fundamental nature of task abstraction. 
      I am also interested in algorithms that opportunize expert-knowledge (e.g. governing physical equations, problem constraints) as well as data to 
      model relational and causal structures.
      </p>
      <p>

    Broad research interests:
    <table> 
    <tr>- computer-assisted knowledge discovery</tr>
    <tr>- formal verification of machine learning systems,</tr>
    <tr>- inductive biases for object-centric representations,</tr>
    <tr>- latent-variable based methods for generative modeling,</tr>
    <tr>- applications of representation theory in machine learning, e.g. Geometric Deep Learning,</tr>
    <tr>- ML-enhanced data collection, integration & outlier detection, </tr>
    </table>
      </p>
      <br />

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

/*
const gdl="https://geometricdeeplearning.com/"
const databook="http://databookuw.com"
const pde="https://arxiv.org/abs/2209.04934"
const brunton="https://www.youtube.com/watch?v=7n7xaviepKM"
const geoff="https://twitter.com/geoffreyhinton/status/1469842971721965568?s=20&t=6n-544KdFG1aKZRuWgN-lQ"
const object_representation="https://yilundu.github.io/ndf/"
const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
<h3>My Interests (longer version)</h3>
const e3 = `$E(3) = SO(3) \\ltimes \\mathbb{R}^3$`
  
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
*/

export default Research;