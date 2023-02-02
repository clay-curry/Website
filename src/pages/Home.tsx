import React, { Fragment } from 'react';
import '../styles/style.css';
import { NavBar, Footer, PageBody, Hero} from '../components';

function Home() {
  
  return (
    <>
      <NavBar />
      <Hero />  
      <PageBody>
          <Description />
      </PageBody>
      <Footer />
    </>
  );
}

function Description(){
  return (<Fragment>
        <p>
          I'm <b>Clay</b>, undergraduate in <b>Computer Science</b> at the <b>University of Oklahoma</b>. As an emerging software 
          engineer and data scientist, I take considerable interest in a (still growing) number of topics in software engineering 
          (design patterns, architecture patterns, project management), as well as the role of machine learning (visual analytics, 
          data mining, and data science) in business and engineering applications.
        </p>
        <p>
          Have a look at some of my recent work soon at your nearest Aerospace conference!
        </p>
    </Fragment>)
}



export default Home;
