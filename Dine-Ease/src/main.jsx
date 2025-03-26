import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import BreakfastPage from './Components/BreakfastPage';
import LunchPage from './Components/LunchPage';
import DinnerPage from './Components/DinnerPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home-2" element={<Home2 />} />
        <Route path="/breakfast" element={<BreakfastPage />} />
        <Route path="/lunch" element={<LunchPage />} />
        <Route path="/dinner" element={<DinnerPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);