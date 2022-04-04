import React from 'react';
import '../styles/style.css';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar /> {/* Component Class Import */}
      <Body>
        <AboutMe />
        <References />
      </Body>
    </>
  );
}

function Body(props: { children: any }) {
  return <div className={'body'}>{props.children}</div>
}

function AboutMe() {
  return (<>
    <h2>About Me</h2>
    <div className='just'>
      <p>
        <b>I am a</b> final year undergraduate at the University of Oklahoma specializing in mathematics and computer science.
        Since November 2021, I have worked as a research assistant focusing on early applications of machine learning in air control, particularly radar waveform sensor fusion for multi-object target tracking.
        My research is in trustworthy machine learning spanning interpretability, robustness, and “big-data” in real-time aviation decisions.

      </p>
      <p>
        My greatest priority is funding my PhD, where I would like to further develop the mathematical theory of my previous work, for robust performance and guaranteeing risk/loss minimization.
        Aside from aviation, I am deeply interested in open problems in the mathematical foundations of learning algorithms, particularly toward principles of architecture selection and generalization properties.
      </p>
    </div>
  </>);
}

function References() {
  return (<>
    <h2>Useful References (useful to me)</h2>
    <p>A complete list of conference proceedings in mathematics and computer science is provided by <a href="https://research.com/conference-rankings/computer-science/">Research.com</a></p>
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
