import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation(); // Get the current route

  // A helper function to wrap the first letter
  const wrapFirstLetter = (text) => (
    <>
      <span className="first-letter">{text[0]}</span>
      {text.slice(1)}
    </>
  );

  return (
    <nav className="navbar">
      <ul>
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
      </ul>
    </nav>
  );
}

export default Navbar;
