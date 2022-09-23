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
const gdl="https://geometricdeeplearning.com/"
const databook="http://databookuw.com"
const risi="https://arxiv.org/abs/2203.06153"
const pde="https://arxiv.org/abs/2209.04934"
const brunton="https://www.youtube.com/watch?v=7n7xaviepKM"
const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
const follow_on="https://scholar.google.com/scholar?start=0&q=networks+equivariance,+OR+equivariant&hl=en&as_sdt=0,37"
const geoff="https://twitter.com/geoffreyhinton/status/1469842971721965568?s=20&t=6n-544KdFG1aKZRuWgN-lQ"
const architectures="https://arxiv.org/pdf/2203.06153.pdf"
const object_representation="https://yilundu.github.io/ndf/"
  
function Statement() {
  
  
  return (<Fragment>
      <p>
        I take strong interest in all work at the union of <a href={gdl}>Geometric Deep Learning</a> (GDL) and <a href={databook}>Physics-Informed Machine Learning</a>, 
        with emphasis on dynamical systems and control engineering problems. Already, the union of GDL and Physics-Informed Machine Learning have proven to be a fertile area 
        for interdisciplinary research. Some of my favorite papers at the union involve rapidly learning <a href={object_representation}>equivariant 
        representations of objects</a> (related to my current research, also <a href={geoff}>Hinton approved</a>) in robotics, leveraging Clifford algebras to <a href={pde}>
        model solutions of certain difficult PDEs</a> (e.g. Navier-Stokes), and using data <a href={brunton}>predict the discrepancies</a> of model-based (idealized)
        solutions to optimal control problems.
      </p>
      <p>
        In my view, both GDL and Physics-Informed Machine Learning can be thought of as two sides of the same coin. Precisely, GDL gives a common mathematical 
        framework (notably, group theory and harmonic analysis) to study the most successful neural network architectures, such as CNNs, RNNs, GNNs, and Transformers, 
        and provides principled constructive procedures to build future architectures yet to be invented. On the other hand, Physics-Informed Machine Learning encompases a number of 
        frameworks for unifying emperical data with prior knowledge (e.g. governing equations, constraints, symmetries) of physical systems to synthesize data-driven models of physical systems.  
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
      <div>Robotics</div>
      <div>Graph Neural Networks</div>
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