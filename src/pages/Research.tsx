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
      <hr />
      <Longer />
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}
const gdl="https://geometricdeeplearning.com/"
const risi="https://arxiv.org/abs/2203.06153"
const mlst="https://youtu.be/bIZB1hIJ4u8"
const pde="https://arxiv.org/abs/2209.04934"
const brunton="https://www.youtube.com/watch?v=7n7xaviepKM"
const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
const follow_on="https://scholar.google.com/scholar?start=0&q=networks+equivariance,+OR+equivariant&hl=en&as_sdt=0,37"
const geoff="https://twitter.com/geoffreyhinton/status/1469842971721965568?s=20&t=6n-544KdFG1aKZRuWgN-lQ"
const architectures="https://arxiv.org/pdf/2203.06153.pdf"
const object_representation="https://yilundu.github.io/ndf/"
  
function Statement() {
  
  
  return (<Fragment>
      <h3>Interest Statement</h3>
      <p>
        I take strong interest in all work at the intersection of <b><a href={gdl}>Geometric Deep Learning</a></b> and  <a href={risi}>Physics-Informed Machine Learning</a>, especially in contexts where variables of interest are uncertain, 
        partially observable, difficult (or impossible) to model in closed-form, in too high-dimensional spaces for traditional learning methods to work efficiently. Topics in this area include using data to model (non-ideal) <a href={pde}>physical 
        systems described (in the ideal) by some PDE</a> which lack known closed-form expressions, virtual screening of small-molecule <a href={architectures}>drugs by predicting their binding properties with target proteins</a>, 
        learning <a href={brunton}>optimal control in dynamical systems</a> outperforming assumption-based closed-form solutions, learning <a href={object_representation}>object representations</a> from few training examples, tracking objects in heavy 
        clutter (my current research), and <a href={follow_on}>much much more</a>.
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
  I developed my interest in <a href={gdl}>GDL</a> in the semester following my first encounter with group theory (the mathematical
  study of symmetry), through an assigned technical report on Cohen and Welling's, <i><a href={gcnn}>Group Equivariant Convolutional
  Networks</a></i>. Since their publication, a number of follow-on works have pushed the deep learning community closer to the goal 
  of general (universally approximating) equivariant models capable of respecting arbitrary symmetries (e.g. <i>SO(3)</i>, <i>SE(3)</i>, 
  <i>E(n)</i>, and other Lie groups) of arbitrary data (multi-vector valued graphs) living in almost-arbitrary manifolds (e.g. vector 
  space of R^n, the n-dimensional sphere) called homogenous spaces. Equivariant networks which operate on data projected onto a harmonic 
  basis with symmetries of the data expressed in their irreducible representations are, in recent literature, called "Steerable Neural 
  Networks". If these don't grab your interest, equivariant networks are also <a href={geoff}>Hinton approved</a>.
  </p>
  <br />
  </>);
}


export default Research;