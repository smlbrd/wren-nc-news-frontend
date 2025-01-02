import '../styles/Header.css';
import { Link } from 'react-router';
import UserIcon from './UserIcon';

function Header() {
  return (
    <header className="header">
      <a href="#main" className="skip-links">
        Skip to content
      </a>
      <Link to={`/articles`}>
        <h1>NC News</h1>
      </Link>
      <UserIcon />
    </header>
  );
}

export default Header;
