import React from 'react';
import { useAsync } from "react-async";
import ReactDOM from 'react-dom';
import './styles/index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import { Home, About, Projects, Contact } from './pages';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);
