import '../styles/Footer.css';
import { Link } from 'react-router';
import TopicsBanner from './TopicsBanner';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <p>Home</p>
      </Link>
      <TopicsBanner />
    </footer>
  );
}

export default Footer;
