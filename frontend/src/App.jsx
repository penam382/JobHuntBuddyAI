import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home'; // Import Home page
import About from './pages/About'; // Import About page
import Dashboard from './pages/Dashboard'; // Import Dashboard page
import BuddyAI from './pages/BuddyAI';
import Feedback from './pages/Feedback'; // Import Feedback page
import './App.css';

function App() {
  return (
    <Router>
      <div className="top-bar"></div> {/* Add the top bar */}
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home component */}
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/BuddyAI" element={<BuddyAI />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;