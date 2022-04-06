import React, { Fragment } from 'react';
import '../styles/home.css';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <div id='body'>
        <AboutMe />
        <References />  
      </div>
    </>
  );
}

function AboutMe() {
  return (<Fragment>
    <h2>About Me</h2>
    <div>
      <div id='me'><img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" /></div>
      
      <p>
        <b>I</b> am an undergraduate at the University of Oklahoma with plans to graduate in December 2022 with a B.A. in Mathematics and a B.S. in Computer Science.
      </p>
      
      <p>
        My highest priority at the moment is getting funding for a masters or PhD program though grants or work opportunity.
        With this, I would love love to explore the mathematical roots of my previous work (or similar work), to provide solid proofs about robustness and expected performance.
        </p>

      <p>
        This website is still very much in progress, and wrapping up two degrees often restricts my ability for web-dev to intermittent bursts of productivity.
        Feel free to snoop the place.
       </p>
    </div>

    <h2>Research</h2>
      <div>
        <p>Together with sofware engineers at the OKC Air Logistics Complex, my research focuses on modernizing <a href="https://www.faa.gov/air_traffic/technology/tbo/">Trajectory Based Operations</a> by leveraging recent advancements in big data processing.
        Currently, we are attacking the problem of <a href="https://en.wikipedia.org/wiki/Data_fusion">data fusion</a>&#8212;combining multiple signals into one coherent picture&#8212;for <a href="https://en.wikipedia.org/wiki/Radiodetermination">distributed radiodetermination systems</a> using cutting-edge <a href="https://storage.googleapis.com/clayc-storage/ml.pdf">Machine Learning algorithms</a>. 
        Such algorithms are favored for their ability continuously improve from examples by effectively self-learning patterns in data. 
        For producing this data, we developed our own physics simulator and web scraping tools for aggregating histoical position data in the form of millions of <a href="https://www.faa.gov/nextgen/programs/adsb/">ADS-B messages</a>, equipped in every aircraft.
        Some open theoretical problems most important to our work are interpretability for sequential data, robustness, and learning under noise and class imbalance.
        </p>

        <p>Aside from my current research, I am deeply interested in all open problems in the mathematical foundations of self-learning algorithms.
        Two areas that ignite me are methods for adversarially robust learning and methods for learning tasks charactarized by maps that are <a href='https://arxiv.org/abs/2203.06153'>equivariance with respect to symmetry groups</a> of identity-preserving transformations acting on the instance space.
        </p>
      </div>
  </Fragment>);
}



function References() {
  return (<>
    <h2>Useful References (useful to me)</h2>
    <p>The list of conference proceedings and journals at <a href="https://research.com/conference-rankings/computer-science/">Research.com</a> gives complete list of conference proceedings in mathematics and computer science. </p>
    <h3>
      Mandatory Reading for ML
    </h3>
    <p>
      For anyone interested, the following papers are the sources that helped me find my own frame of thinking on machine learning algorithms. 
      Some of these papers are intermittently math heavy, and understanding every detail at first is not necessary.
      <h4>Theory</h4>
      <ul>
        <li><a href="https://storage.googleapis.com/clayc-storage/ml.pdf" rel={'noreferrer'} target="_blank">The Mathematics of Learning: Dealing with Data</a></li>
        <li><a href="https://ieeexplore.ieee.org/document/80230" rel={'noreferrer'} target="_blank">Perceptron Based Learning Algorithms</a></li>
      </ul>
      <h4>Research</h4>
      <ul>
        <li><a href="https://www.ams.org/notices/200305/fea-smale.pdf" rel={'noreferrer'} target="_blank">A Few Useful Things to Know about Machine Learning</a></li>
        <li><a href="http://www.diochnos.com/teaching/CS4033/2022S/ML_that_Matters.pdf" rel={'noreferrer'} target="_blank">Machine Learning that Matters</a></li>
      </ul>
    </p>
    <br />
    <h3>
      Conference Proceedings
    </h3>
    <p>
      Conference proceedings are a complete written record of the work presented to fellow researchers at academic conferences. Works are typically organized in the order of presentation at the conference.
    </p>
    <p>
      These proceedings are from conferences most aligned with my research interests.
      <ul>
        <li><a href="https://www.auai.org/uai2022/" rel={'noreferrer'} target="_blank">Conference on Uncertainty in Artificial Intelligence</a></li>
        <li><a href="https://www.auai.org/uai2022/" rel={'noreferrer'} target="_blank">IEEE/CVF Conference on Computer Vision and Pattern Recognition</a></li>
      </ul>

    </p>
  </>
  );
}

export default Home;
