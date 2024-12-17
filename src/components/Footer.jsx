import '../styles/Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <div className="footer">
      <nav>
        <Link to={`/articles`}>Home</Link>
      </nav>
      <div>Crocs, socks or flippy-flops? What do you want on your footer?</div>
    </div>
  );
}

export default Footer;
