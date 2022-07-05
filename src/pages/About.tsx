import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css'

function Research() {
  return (
    <div id='body'>
      <h2>Research</h2>
        <Statement />
        <Work />
        <References />  
    </div>
  );
}

function Statement() {
  return (<Fragment>
      <h3>Statement of Interest</h3>
        <p>
        I am deeply interested in all open problems in the mathematical foundations of self-learning algorithms, particularly the axiomatizaion of <a href="https://www.deeplearningbook.org/">Deep Learning</a>.

        Two research areas that ignite me are practical and theoreical methods for quantifying expected performance (generalization) on unseen data, and systemetizing the use inductive biases that allow for learning with fewer training examples. 
        
        learning functions guaranteed to respect some symmetry, expressed by the property of invariance (or, more generally equivariance) to a group of symmetries.
        </p>

      <h3>About me</h3>
      <p>
        I am an undergraduate at the University of Oklahoma with plans to graduate in December 2022 with a B.S. in Computer Science.
        My highest priority at the moment is getting funding for a masters program in Mathematics though grants or work opportunity.
        With this, I would love to explore the mathematical roots of my previous work (or similar work), to provide solid proofs about robustness and expected performance.
      </p>
      <h4>Key Words</h4>
      
      <div className='keywords'>
      <div>Learning Algorithms</div>
      <div>Hierarchical Feature Learning</div>
      <div>Symmetry, Invariance and Equivariance</div>
      </div>

        
  </Fragment>);
}
function Work() {
  return (<Fragment>
      <h3>Research</h3>
      <h4>United States <a href="https://www.ou.edu/oadii/news-events/2022/ou-oc-alc-strengthen-partnership-with-cooperative-research-and-development-agreement">OKC Air Logistics Complex</a> : Sustainment and Modernization : </h4>
        <p>
          With sofware engineers at the OKC ALC, I helped with various tasks related to modernizing <a href="https://www.faa.gov/air_traffic/technology/tbo/">multisource-multitarget information fusion</a>, employing a class of algorithms and tools collectively known as "deep learning."
        
          Such algorithms are favored for their ability continuously improve from examples by effectively self-learning patterns in data.
          For producing this data, we developed our own physics simulator (I had little role in making this) and we created data-scraping tools capable of storing millions of <a href="https://www.faa.gov/nextgen/programs/adsb/">ADS-B messages</a> (this was my baby).
          Our work touched some of the most important areas in deep learning, including interpretability (explanation generation), human-computer interaction (quantifying uncertainty), extracting information from sequential data, robustness, and learning under noise and class imbalance (recognizing uncommon aircraft types).
        </p>
        

        
  </Fragment>);
}



function References() {
  return (<>
    <h3>Useful References (useful to me)</h3>
    <p>The list of conference proceedings and journals at <a href="https://research.com/conference-rankings/computer-science/">Research.com</a> gives complete list of conference proceedings in mathematics and computer science. </p>
    <h3>
      Readings on Machine Learning
    </h3>
    <p>
      For anyone interested, the following papers are the sources that helped me find my own frame of thinking on machine learning algorithms. 
      There are also several related papers that I hope to have the time to read.
      <br />
      <br />
      Some of these papers are intermittently math heavy, and understanding every detail at first is not necessary to gain useful insight.
      
      <h4>Mathematics for ML</h4>
      <ul>
        <li><a href="https://www.ams.org/notices/200305/fea-smale.pdf" rel={'noreferrer'} target="_blank">The Mathematics of Learning: Dealing with Data</a></li>
        <li><a href="https://storage.googleapis.com/clayc-storage/Linear%20Algebra%20Review%20and%20Reference.pdf">Linear Algebra</a></li>
        <li><a href="https://storage.googleapis.com/clayc-storage/multilinear.pdf">Advanced linear algebra (optional, but useful)</a></li>      
        <li><a href="https://arxiv.org/abs/2004.05154">Theoretical Aspects of Group Equivariant Neural Networks</a></li>
      </ul>      
      <h4>Research Rules-of-Thumb</h4>
      <ul>
        <li><a href="http://www.diochnos.com/teaching/CS4033/2022S/ML_that_Matters.pdf" rel={'noreferrer'} target="_blank">Machine Learning that Matters</a></li>
        <li><a href="https://storage.googleapis.com/clayc-storage/ml.pdf" rel={'noreferrer'} target="_blank">A Few Useful Things to Know about Machine Learning</a></li>      
      </ul>
      <h4>Computational Learning Theory</h4>
      <ul>
        <li><a href="https://dl.acm.org/doi/pdf/10.1145/1968.1972">A Theory of the Learnable</a></li>
        <li><a href="http://www.diochnos.com/teaching/CS5970/2021F/Tools.pdf" rel={'noreferrer'} target="_blank">Tools for Bounding Probabilities</a></li>
        <li><a href="http://www.diochnos.com/teaching/CS5970/2021F/essentials.pdf">Essentials on the Analysis of Randomized Algorithms</a></li>
        <li><a href="http://www.diochnos.com/teaching/CS4033/2022S/IntroLearning.pdf">Basic Tools and Techniques for Algorithms in Learning Theory</a></li>
      </ul>
      <h4>Artificial Neural Networks</h4>
      <ul>
        <li><a href="https://ieeexplore.ieee.org/document/80230" rel={'noreferrer'} target="_blank">Perceptron Based Learning Algorithms</a></li>
      </ul>
      <h4>Neuroevolution (ANN optimization using Evolutionary Computation)</h4>
      <ul>
        <li><a href="http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf">Evolving Neural Networks through Augmenting Topologies</a></li>
      </ul>
    </p>
    <br />
    <h4>
      Conference Proceedings
    </h4>
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

export default Research;
