import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Adding from './pages/Adding';
import Recipes from './pages/Recipes';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/adding" element={<Adding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

