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
  const footerArray = [
    {
      title: "Platform",
      links: [
        { title: "About", link: "" },
        { title: "Features", link: "" },
        { title: "Blog", link: "" },
      ],
    },
    {
      title: "Community",
      links: [
        { title: "Discussions", link: "https://github.com/HacktoberBlog/hackerblog-frontend/discussions" },
        { title: "Issues", link: "https://github.com/HacktoberBlog/hackerblog-frontend/issues" },
        { title: "Contributing", link: "https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CONTRIBUTING.md" },
        { title: "Hacktoberfest", link: "https://hacktoberfest.com" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", link: "https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/README.md" },
        { title: "Help Center", link: "" },
        { title: "Status", link: "" },
        { title: "API", link: "" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", link: "" },
        { title: "Terms of Service", link: "" },
        { title: "Code of Conduct", link: "https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CODE_OF_CONDUCT.md" },
        { title: "Cookie Policy", link: "" },
      ],
    },
  ];

  const socialsArray = [
    {
      title: "Github",
      link: "https://github.com/HacktoberBlog",
      icon: <FaGithub />,
    },
    {
      title: "Discord",
      link: "https://discord.gg/hackerblog",
      icon: <FaDiscord />,
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/company/hackerblog",
      icon: <FaLinkedin />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/hackerblog",
      icon: <FaTwitter />,
    },
  ];

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
            <div className="footer-social">
              {socialsArray.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerArray.map((array)=>(
            <div className="footer-section">
            <h4 className="footer-section-title">{array.title}</h4>
            <div className="footer-links">
              {array.links.map((subArr)=>(
                <a
                href={subArr.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {subArr.title}
              </a>
              ))}
            </div>
          </div>
          ))}
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
    </footer>
  );
};

export default Footer;
