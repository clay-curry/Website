import React from 'react';
import '../styles/style.css';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar /> {/* Component Class Import */}
      <Body>
        <AboutMe />
        <ResearchStatement />
        <GenericSection title="Past Work">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </GenericSection>
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
    <h1>About Me</h1>
    <p>
      <b>I am a</b> final year undergraduate at the University of Oklahoma expecting to graduate in the spring of 2023 with degrees computer science and mathematics. I am an enthusiastic learner, an application-motivated mathematician, and the best chess player in the room.</p>
    <p>Since November 2021, I have worked as a research assistant with Dr. Dean Hougen, Associate Director and Associate Professor of OU's School of Computer Science, focusing on applications of deep learning in air control, particularly waveform sensor fusion and multi-agent trajectory prediction for auto-routing of individual aircraft and airline fleets. I have three years of academic training in industry-relevant programming languages, cloud computing in GCP, data mining, analyzing algorithms, remote communication tools, and exploratory statistical analysis with report writing and visual analytics. Additionally, I have a year of experience programming in multidisciplinary research-oriented professional Agile-driven software teams.
    </p>
  </>);
}

function ResearchStatement() {
  return (<div>
    <h2>Research Statement</h2>
    <p>
      Born from the ashes of stars, the most remarkable thing about the smoldering stardust that I call "me" is my intelligence. The automata-like interconnections between my neurons make me one of the many objects by which the universe consumes information about itself to illuminate optimal pathways for executing its ultimate goal. This phenomenology is characterized as follows: the universe acts on my body, these interaction are encoded by my body as raw information, the interconnections between my transform this raw information stream into informative observations, then observations are abstracted as entities that result in optimal actions for my goals. Somehow the experience of life often overshadows quite what a significant it is to experience life.</p>
    <p>Steve Jobs described the computer as a bicycle for the human mind. In my view, machine learning is the Tour de France through the intracacies of the human mind. The only formal system maybe capable of describing how the universe understands herself is the language the she uses to reveal herself to us, mathematics. For this reason, I have a deep affinity for research in computational intelligence broadly applied, data extraction, feature representation, invariant theory, computational geometry, and parallel computing.
    </p>
  </div>);
}


function References() {
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

function GenericSection(props: { title: string, children: any }) {
  return (<div>
    <h2>{props.title}</h2>
    <p>{props.children}</p>
  </div>);
}

export default Home;
