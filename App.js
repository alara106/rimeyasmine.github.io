import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/style.css";
import Header from './composant/header';
import Film from './composant/detailfilm';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/detail/:id" element={<Film/>} />
      </Routes>
    </Router>
  );
}

export default App;
