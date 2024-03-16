import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
