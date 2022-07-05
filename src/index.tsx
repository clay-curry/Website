import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import { Home, About } from './pages';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);
