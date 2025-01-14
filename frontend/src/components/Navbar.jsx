import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation(); // Get the current route

  const wrapFirstLetter = (text) => (
    <>
      <span className="first-letter">{text[0]}</span>
      {text.slice(1)}
    </>
  );

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            {wrapFirstLetter("Home")}
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            {wrapFirstLetter("About")}
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            {wrapFirstLetter("Dashboard")}
          </Link>
        </li>
        <li>
          <Link to="/buddyAI" className={location.pathname === '/buddyAI' ? 'active' : ''}>
            {wrapFirstLetter("BuddyAI")}
          </Link>
        </li>
        <li>
          <Link to="/feedback" className={location.pathname === '/feedback' ? 'active' : ''}>
            {wrapFirstLetter("Feedback")}
          </Link>
        </li>
        <li>
          <Link to="/" className="job-hunt-link">
            Job Hunt Buddy AI
          </Link>
        </li>
        {/* Profile Circle Icon */}
        <li className="profile">
          <Link to="/profile">
            <img src="path_to_profile_picture.jpg" alt="Profile" className="profile-img" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
