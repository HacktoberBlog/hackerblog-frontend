import { Link } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import {
  FaGithub,
  FaReact,
  FaServer,
  FaBug,
  FaBook,
  FaPen,
  FaHandshake,
  FaRocket,
  FaLeaf,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./LandingPage.css";
import Card from "../article-section/Card";

const LandingPage = () => {
  const { userProfile } = useMyContext();
  const card1={
     img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
     title:"Article Title 1",
     desc:"This is a description for Article 1.",
};


  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-decoration"></div>
        <div className="hero-container">
          <h1 className="hero-title website-title">HackerBlog</h1>
          <p className="hero-subtitle typewriter-delay-1">
            Where developers share stories, insights, and code - no cap! 🔥
          </p>

          {!userProfile ? (
            <div className="hero-actions">
              <Link to="/register" className="cta-button primary">
                Get Started
              </Link>
              <Link to="/login" className="cta-button secondary">
                Sign In
              </Link>
            </div>
          ) : (
            <div className="hero-actions">
              <p className="welcome-message">
                Welcome back, {userProfile.name || "Developer"}! Ready to drop
                some fire content? 🚀
              </p>
              <Link to="/dashboard" className="cta-button primary">
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">
              A Blog Platform That Actually Gets It
            </h2>
            <p className="about-description">
              HackerBlog is lowkey the blog platform developers have been
              waiting for. Share your coding wins and fails, drop tutorials that
              actually make sense, spill the tea on programming concepts, and
              vibe with a community that gets your semicolon struggles. Whether
              you're documenting your coding journey or sharing that
              breakthrough moment when everything finally clicks - we're here
              for it! ✨
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="stat-number">Open Source</h3>
                <p className="stat-label">Community Driven (Obviously)</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">React + Spring</h3>
                <p className="stat-label">Modern Tech Stack</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">Hacktoberfest</h3>
                <p className="stat-label">Ready Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-section">
        <div className="article-container">
          <h2 className="article-title">Latest Articles</h2>
          <div className="card-container">
            <Card {...card1}/>
        </div>
        </div>
      </section>

      <section className="hacktoberfest-section">
        <div className="hacktoberfest-container">
          <div className="hacktoberfest-content">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-btn close"></span>
                  <span className="terminal-btn minimize"></span>
                  <span className="terminal-btn maximize"></span>
                </div>
                <div className="terminal-title">hacktoberfest-2025</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command typewriter">
                    cat hacktoberfest-info.txt
                  </span>
                </div>
                <div className="terminal-output">
                  <h2 className="hacktoberfest-title typewriter-delay-1">
                    Hacktoberfest 2025 Project
                  </h2>
                  <p className="hacktoberfest-description typewriter-delay-2">
                    HackerBlog is proudly participating in Hacktoberfest 2025!
                  </p>
                  <div className="contribution-areas">
                    <div className="terminal-line">
                      <span className="prompt">$</span>
                      <span className="command typewriter-delay-3">
                        ls -la contribution-opportunities/
                      </span>
                    </div>
                    <div className="contribution-grid">
                      <div className="contribution-item terminal-item">
                        <div className="contribution-icon">
                          <FaReact />
                        </div>
                        <h4>Frontend Development</h4>
                        <p>
                          React.js components, UI/UX improvements, and
                          responsive design
                        </p>
                      </div>
                      <div className="contribution-item terminal-item">
                        <div className="contribution-icon">
                          <FaServer />
                        </div>
                        <h4>Backend Development</h4>
                        <p>
                          Spring Boot APIs, database design, and server-side
                          logic
                        </p>
                      </div>
                      <div className="contribution-item terminal-item">
                        <div className="contribution-icon">
                          <FaBug />
                        </div>
                        <h4>Bug Fixes & Testing</h4>
                        <p>
                          Quality assurance, bug reports, and test case
                          development
                        </p>
                      </div>
                      <div className="contribution-item terminal-item">
                        <div className="contribution-icon">
                          <FaBook />
                        </div>
                        <h4>Documentation</h4>
                        <p>
                          README improvements, code comments, and user guides
                        </p>
                      </div>
                    </div>

                    <div className="github-links">
                      <div className="terminal-line">
                        <span className="prompt">$</span>
                        <span className="command typewriter-delay-4">
                          open github-repositories
                        </span>
                      </div>
                      <a
                        href="https://github.com/HacktoberBlog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button terminal-button org-button"
                      >
                        <FaGithub className="github-icon" />
                        Visit Our Organization
                      </a>
                      <a
                        href="https://github.com/HacktoberBlog/SpringBootBackend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button terminal-button backend-button"
                      >
                        <MdDashboard className="github-icon" />
                        Backend Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="community-container">
          <h2 className="community-title">
            Join Our Growing Community (It's Giving Main Character Energy) ✨
          </h2>
          <p className="community-description">
            Whether you're here to flex your latest project, learn from the
            pros, or contribute to open source, HackerBlog welcomes developers
            from all backgrounds. We're building something different here - come
            through! 💪
          </p>

          <div className="community-features">
            <div className="feature-item">
              <div className="feature-icon">
                <FaPen />
              </div>
              <h3>Document Your Wins & Fails</h3>
              <p>
                Share your coding journey - the plot twists, breakthroughs, and
                those 3AM debugging sessions
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3>Find Your Code Besties</h3>
              <p>
                Network with developers who speak your language and maybe find
                your next collab partner
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Show Off Your Projects</h3>
              <p>
                Display your portfolio and get that validation you deserve from
                people who actually understand
              </p>
            </div>
          </div>

          {!userProfile && (
            <div className="community-cta">
              <p className="cta-text">
                Ready to level up your developer game? Let's go! 🎮
              </p>
              <Link to="/register" className="community-button">
                Start Your Journey
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
