import '../styles/Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer">
      <Link to={`/articles`}>
        <h1>Home</h1>
      </Link>
    </footer>
  );
}

export default Footer;
