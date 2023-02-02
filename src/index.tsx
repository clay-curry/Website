import React from "react";
import ReactDOM from 'react-dom';

import { 
  BrowserRouter,
  Route, 
  Routes
} from "react-router-dom";

import { Home, Research, Experience, Contact } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/resume" element={<Resume />}/> 
              
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function Resume() {
  window.location.replace("/resume.pdf");
  return null;
}