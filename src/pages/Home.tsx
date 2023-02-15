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
        Hi, I'm Clay, avid Python programmer and open source contributor. I am deeply passionate for opportunities that enable me to remove barriers in learning algorithms research. I am actively seeking opportunities that will enable me to continue this passion.
        </p>
    </Fragment>)
}



export default Home;
