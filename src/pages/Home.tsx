import React from 'react';
import '../styles/style.css';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar /> {/* Component Class Import */}
      <Body />
    </>
  );
}

function Body() {
  return (
    <div className={ 'home-body' }>
      <AboutMe />
      <GenericSection title="Research Statement" />
      <GenericSection title="Past Work" />
      <References />
    </div>
  );
}

function AboutMe()
{
  return (<>
  <h1>About Me</h1>
  <p><b>I am a</b> final year computer science and mathematics student at the University of Oklahoma.</p>
  </>);
}



function References()
{
  return (<>
  <h2>Useful References</h2>
  <h3>
  Conference Proceedings
  </h3>
  <p>
    Conference proceedings are a complete written record of the work presented to fellow researchers at academic conferences. Works are typically organized in the order of presentation at the conference.
   </p>
   <p>
   These proceedings are from conferences most aligned with my research interests.   
      <ul>
        <li><a href="https://www.auai.org/uai2022/" target="_blank">Conference on Uncertainty in Artificial Intelligence</a></li>
        <li><a href="https://www.auai.org/uai2022/" target="_blank">IEEE/CVF Conference on Computer Vision and Pattern Recognition</a></li>
      </ul>
    A more complete list of conference proceedings in mathematics and computer science is provided by <a href="https://research.com/conference-rankings/computer-science/">Research.com</a>
  </p>
  </>
  );
}

function GenericSection(props: { title: string; body?: string })
{
  return (<div>
  <h2>{props.title}</h2>
  <p>{props.body}</p>
  </div>);
}

export default Home;
