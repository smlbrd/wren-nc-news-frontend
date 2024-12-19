import '../styles/Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer">
      <Link to={`/articles`}>
        <p>Home</p>
      </Link>
    </footer>
  );
}

export default Footer;
