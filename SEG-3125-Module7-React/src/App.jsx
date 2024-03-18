import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Chat from './components/Chat';
import ReservationPage from './pages/Reservation';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/reserve" element={<ReservationPage />} /> {}
          </Routes>
        </div>
        <Chat /> {}
      </div>
    </Router>
  );
}

export default App;
