import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to={`/articles`}>Home</Link>
      </nav>
    </footer>
  );
}

export default Footer;
