import '../styles/Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <p>Home</p>
      </Link>
    </footer>
  );
}

export default Footer;
