import '../styles/Header.css';
import { Link } from 'react-router';

function Header() {
  return (
    <header className="header">
      <a href="#main" className="skip-links">
        Skip to content
      </a>
      <Link to={`/articles`}>
        <h1>NC News</h1>
      </Link>
    </header>
  );
}

export default Header;
