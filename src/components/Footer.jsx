import { Link } from "react-router-dom";
import {
  FaGithub,
  FaReact,
  FaServer,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaHeart,
  FaCode,
  FaLeaf,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-title">
              <FaCode className="footer-logo" aria-hidden="true" focusable={false} />
              HackerBlog
            </h3>
            <p className="footer-description">
              Where developers share stories, insights, and code - no cap! 🔥
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/HacktoberBlog"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/hackerblog"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/company/hackerblog"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://discord.gg/hackerblog"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Platform</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/features" className="footer-link">
                Features
              </Link>
              <Link to="/blog" className="footer-link">
                Blog
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Community</h4>
            <div className="footer-links">
              <a
                href="https://github.com/HacktoberBlog/hackerblog-frontend/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Discussions
              </a>
              <a
                href="https://github.com/HacktoberBlog/hackerblog-frontend/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Issues
              </a>
              <a
                href="https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Contributing
              </a>
              <a
                href="https://hacktoberfest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Hacktoberfest
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Resources</h4>
            <div className="footer-links">
              <a
                href="https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Documentation
              </a>
              <Link to="/help" className="footer-link">
                Help Center
              </Link>
              <Link to="/status" className="footer-link">
                Status
              </Link>
              <Link to="/api" className="footer-link">
                API
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Legal</h4>
            <div className="footer-links">
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link">
                Terms of Service
              </Link>
              <a
                href="https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CODE_OF_CONDUCT.md"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Code of Conduct
              </a>
              <Link to="/cookies" className="footer-link">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 HackerBlog. Made with <FaHeart className="heart-icon" aria-hidden="true" focusable={false} /> by
              the developer community.
            </p>
            <div className="footer-tech">
              <span className="tech-badge">
                <FaReact className="tech-icon" />
                React
              </span>
              <span className="tech-badge">
                <FaServer className="tech-icon" />
                Spring Boot
              </span>
              <span className="tech-badge">
                <FaLeaf className="tech-icon" />
                Open Source
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
