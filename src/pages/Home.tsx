import React from 'react';
import '../styles/Home.css';

import logo from '../logo.svg';
import TitleBar from '../components/TitleBar';

function Home() {
  return (
    <div className='Home'>
      <TitleBar /> {/* Component Class Import */}
      <h1>
        Welcome To My Website
      </h1> 
      <h2>
        About Me
      </h2>
      <h2>
        Research Statement
      </h2>
      <h2>
        Past Work
      </h2>
      <h2>
        References  
      </h2>



      <footer>
      <img src={logo} className="Home-logo" alt="logo" />
      </footer>

      
    </div>
  );
}



export default Home;
