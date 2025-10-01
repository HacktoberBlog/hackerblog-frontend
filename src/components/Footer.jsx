import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-description">
            <h3 className="footer-title">HackerBlog</h3>
            <p className="footer-text">
              A modern, developer-focused blogging platform where coders share stories, insights, and knowledge - no cap!
            </p>
          </div>

          <div className="footer-social">
            <h4 className="social-title">Follow PA</h4>
            <div className="social-links">
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 HackerBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;