import '../styles/Header.css';
import { Link } from 'react-router';

function Header() {
  return (
    <div className="header">
      <Link to={`/articles`}>
        <h1>NC News</h1>
      </Link>
    </div>
  );
}

export default Header;
