import React from 'react';
import '../styles/style.css';
import { NavBar, Footer, PageContent, ContactBtn, MoreComing } from '../components';

function Home() {
  const react = "https://reactjs.org/";
  const conway = "https://en.wikipedia.org/wiki/John_Horton_Conway"
  const hougen = "https://www.ou.edu/coe/cs/people/hougen";
  const partnership = "https://ou.edu/research-norman/news-events/2020/oc-alc-teams-up-with-ou-on-educational-partnership-agreement";
  return (
    <>
      <NavBar />
      <Hero />  
      <PageContent>
        <h2>About Me</h2>
        
        <p>
          Hellooo, and welcome to my little internet world (hand built in <a href={react}>ReactJS</a>). My name is Clay and I am an undergraduate research 
          assistant under the advisement of <a href={hougen}>Dr. Dean Hougen</a> at The University of Oklahoma. Our work addresses knowledge gaps at the 
          intersection of machine learning, statistical information fusion, and object-tracking sensor networks. When I'm not doing that, you're guaranteed 
          to find me either surfing through open-source projects, jogging with Mia (my good German Sheppard), or self-studying (currently, it's <a href={conway}>J. 
          H. Conway's</a> <i>Point-Set Topology</i>).
        </p>

        <p>
          My interests are in applied machine learning, with emphasis in multidisciplinary research. Regarding my experience, several are listed here on my website (though this too is still in progress).
        </p>
        <p>
          I'm also seeking full-time opportunities starting in December (my expected graduation date), which are likely to be stepping stones into 
          graduate school (though I am perfectly fine with taking a gap semester, or several). If anything here looks interesting, <i>please</i> reach out to get in touch!
        </p>

        <ContactBtn />
        <MoreComing />
        
      </PageContent>  
      <Footer />
    </>
  );
}

function Hero() {
  
  return (
    <div className='hero'>
        <img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" />
        <div className='text'>
        <div className='text'>Machine Learning ∪ Information Fusion ∪</div>
        <div className='text'>Data Visualization ∪ Software Engineering ∪</div>
        <div className='text'>Object Tracking ∪ Artificial Intelligence</div>
            <div className='text'></div>
            <div className='social'>
                <a href="https://github.com/claycurry34"><svg id="gh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                <a href="https://www.linkedin.com/in/clay-curry/"><svg id="in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                <a href="https://twitter.com/claycurry_"><svg id="tw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg></a>  
            </div>
        </div>
    </div>
  );
}

export default Home;
