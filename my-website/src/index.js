import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/nav.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import Projects from './components/projects.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Projects />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
