import React from 'react';
import '../styles/style.css';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar /> {/* Component Class Import */}
      <Body>
      <AboutMe />
      <GenericSection title="Research Statement">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </GenericSection>
      <GenericSection title="Past Work"> 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </GenericSection>
      <References />
      </Body>
    </>
  );
}

function Body(props: {children: any }) {
  return <div className={ 'body' }>{props.children}</div>
}

function AboutMe()
{
  return (<>
  <h1>About Me</h1>
  <p><b>I am a</b> final year computer science and mathematics undergraduate student at the University of Oklahoma.</p>
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
        <li><a href="https://www.auai.org/uai2022/" rel={'noreferrer'} target="_blank">Conference on Uncertainty in Artificial Intelligence</a></li>
        <li><a href="https://www.auai.org/uai2022/" rel={'noreferrer'} target="_blank">IEEE/CVF Conference on Computer Vision and Pattern Recognition</a></li>
      </ul>
    A more complete list of conference proceedings in mathematics and computer science is provided by <a href="https://research.com/conference-rankings/computer-science/">Research.com</a>
  </p>
  </>
  );
}

function GenericSection(props: { title: string, children: any })
{
  return (<div>
  <h2>{props.title}</h2>
  <p>{props.children}</p>
  </div>);
}

export default Home;
