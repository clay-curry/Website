import React, { Fragment } from 'react';
import '../styles/style.css';

function Projects() {
  return (
    <>
      <div id='body'>
      <h2>Projects</h2>
       <Work />  
      </div>
    </>
  );
}

function Work() {
    return (<Fragment>
      <h4>More Coming</h4>
      <p>I'm just getting started (and extremely busy with my last sememster), but more is on its way. If you want to see more, you can follow me on GitHub!</p>
    </Fragment>);
  }



export default Projects;
