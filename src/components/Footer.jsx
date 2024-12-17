import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to={`/articles`}>Home</Link>
      </nav>
      <div>Crocs, socks or flippy-flops? What do you want on your footer?</div>
    </footer>
  );
}

export default Footer;
