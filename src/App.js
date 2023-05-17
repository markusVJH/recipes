import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Adding from './pages/Adding';
import Recipes from './pages/Recipes';
import RecipeSingle from './pages/RecipeSingle';

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeSingle />} />
        <Route path="/adding" element={<Adding />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

