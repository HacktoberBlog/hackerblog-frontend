import { Link } from "react-router-dom";
import { useState } from "react";
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
  FaEnvelope,
} from "react-icons/fa";
import Toast from "./ui/Toast";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "info"
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setToast({
        isVisible: true,
        message: "❌ Please enter your email address.",
        type: "error"
      });
      return;
    }

    if (!validateEmail(email)) {
      setToast({
        isVisible: true,
        message: "❌ Please enter a valid email address.",
        type: "error"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your backend
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      setToast({
        isVisible: true,
        message: "✅ You have successfully subscribed to our newsletter!",
        type: "success"
      });
      
      setEmail(""); // Clear the form
    } catch (error) {
      setToast({
        isVisible: true,
        message: "❌ Something went wrong. Please try again later.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <footer className="footer font-google-code">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-title">
              <FaCode
                className="footer-logo"
                aria-hidden="true"
                focusable={false}
              />
              HackerBlog
            </h3>
            <p className="footer-description">
              Where developers share stories, insights, and code - no cap! 🔥
            </p>
            
            {/* Newsletter Subscription */}
            <div className="newsletter-section">
              <h4 className="newsletter-title">
                <FaEnvelope className="newsletter-icon" />
                Stay Updated
              </h4>
              <p className="newsletter-description">
                Get the latest developer stories and insights delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="newsletter-input"
                    disabled={isSubmitting}
                    required
                  />
                  <button
                    type="submit"
                    className="newsletter-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
            
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
              © 2025 HackerBlog. Made with{" "}
              <FaHeart
                className="heart-icon"
                aria-hidden="true"
                focusable={false}
              />{" "}
              by the developer community.
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
      
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </footer>
  );
};

export default Footer;
