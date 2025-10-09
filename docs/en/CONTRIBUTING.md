# 🤝 Contributing to HackerBlog

> Welcome to the HackerBlog community! We're excited to have you contribute to our developer-focused blogging platform. Whether you're here for Hacktoberfest 2025 or just want to help build something awesome, this guide will get you started! 🚀

![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange?style=for-the-badge)
![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-brightgreen?style=for-the-badge)

## 🌟 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Ways to Contribute](#-ways-to-contribute)
- [Development Setup](#-development-setup)
- [Contribution Process](#-contribution-process)
- [Coding Standards](#-coding-standards)
- [Pull Request Guidelines](#-pull-request-guidelines)
- [Issue Guidelines](#-issue-guidelines)
- [Hacktoberfest Guidelines](#-hacktoberfest-guidelines)
- [Recognition](#-recognition)

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

**TL;DR**: Be respectful, be kind, and help create a positive community for everyone! ✨

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **GitHub Account** - [Sign up here](https://github.com/join)
- **Code Editor** (VS Code recommended)

### Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hackerblog-frontend.git
   cd hackerblog-frontend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```
5. **Open** `http://localhost:5173` in your browser

## 🎯 Ways to Contribute

We welcome all types of contributions! Here are some ways you can help:

### 🔧 Frontend Development

- **React Components**: Build new UI components or improve existing ones
- **Styling**: Enhance CSS, animations, and responsive design
- **User Experience**: Improve navigation, accessibility, and usability
- **Performance**: Optimize bundle size, loading times, and rendering

### 🐛 Bug Fixes & Testing

- **Bug Reports**: Find and report issues with detailed reproduction steps
- **Bug Fixes**: Fix existing bugs and edge cases
- **Testing**: Add unit tests, integration tests, or E2E tests
- **Quality Assurance**: Manual testing across different browsers and devices

### 📚 Documentation

- **README Updates**: Improve installation guides and project documentation
- **Code Comments**: Add helpful comments to complex code sections
- **API Documentation**: Document component props, functions, and utilities
- **Tutorials**: Create guides for new contributors

### 🎨 Design & UI/UX

- **Visual Improvements**: Enhance the terminal theme and animations
- **Mobile Experience**: Improve responsive design and mobile interactions
- **Accessibility**: Ensure the app is accessible to all users
- **Icon Design**: Create or improve icons and visual elements

### 🚀 New Features

- **Dashboard**: Build user dashboard functionality
- **Blog Editor**: Rich text editor for creating blog posts
- **Search**: Implement search functionality
- **User Profiles**: User profile pages and customization

## 🛠 Development Setup

### Environment Setup

1. **Create a `.env` file** (if needed):

   ```bash
   cp .env.example .env
   ```

2. **Branch naming convention**:
   ```bash
   git checkout -b feature/your-feature-name
   git checkout -b fix/bug-description
   git checkout -b docs/documentation-update
   ```

### Development Workflow

1. **Start development server**:

   ```bash
   npm run dev
   ```

2. **Run linter**:

   ```bash
   npm run lint
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Contribution Process

### 1. Find an Issue

- Check [open issues](https://github.com/HacktoberBlog/hackerblog-frontend/issues)
- Look for issues labeled:
  - `good-first-issue` - Perfect for newcomers
  - `hacktoberfest` - Hacktoberfest eligible
  - `help-wanted` - We need your help!
  - `frontend` - Frontend-related tasks

### 2. Claim an Issue

Comment on the issue you'd like to work on with:

```
I'd like to work on this issue! 🙋‍♂️
```

Wait for a maintainer to assign it to you before starting work.

### 3. Work on Your Contribution

1. **Create a branch** from `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add awesome new feature"
   ```

### 4. Submit a Pull Request

1. **Push your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub

3. **Fill out the PR template** completely

## 💻 Coding Standards

### JavaScript/React Guidelines

```javascript
// ✅ Good
const MyComponent = ({ title, isActive }) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="my-component">
      <h1>{title}</h1>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
};

// ❌ Bad
function myComponent(props) {
  var count = 0;
  return (
    <div>
      <h1>{props.title}</h1>
      <button onclick="count++">Count: {count}</button>
    </div>
  );
}
```

### CSS & Styling Guidelines

**We use Tailwind CSS for styling in this project!** 🎨

#### Tailwind CSS Best Practices

```jsx
// ✅ Good - Use Tailwind utility classes
const MyComponent = ({ title, isActive }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-purple-300 p-8 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-white">{title}</h1>
      <button
        className={`px-4 py-2 rounded transition-colors duration-200 ${
          isActive
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-gray-600 hover:bg-gray-700 text-gray-200"
        }`}
      >
        Click me
      </button>
    </div>
  );
};

// ❌ Bad - Avoid custom CSS when Tailwind utilities exist
const BadComponent = () => {
  return (
    <div className="custom-card">
      <h1 className="custom-title">Title</h1>
    </div>
  );
};
```

#### Custom CSS (when needed)

```css
/* ✅ Good - Use CSS custom properties and consistent naming */
.landing-page {
  background: linear-gradient(135deg, rgb(28, 28, 64) 0%, rgb(20, 20, 48) 100%);
  color: rgb(160, 160, 255);
  padding: 2rem;
}

.landing-page__title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* ❌ Bad - Inconsistent naming and hard-coded colors */
.page {
  background: #1c1c40;
  color: #a0a0ff;
}

.title1 {
  font-size: 32px;
}
```

#### Styling Guidelines Summary

- **Prefer Tailwind utilities** over custom CSS
- **Use responsive classes** (`sm:`, `md:`, `lg:`, `xl:`) for mobile-first design
- **Maintain color consistency** with our purple/blue theme (`purple-300`, `slate-800`, etc.)
- **Use semantic class combinations** for reusable patterns
- **Group related classes** for better readability
- **Only write custom CSS** when Tailwind utilities are insufficient

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add user authentication system
fix: resolve login form validation bug
docs: update installation instructions
style: improve button hover animations
refactor: reorganize component structure
test: add unit tests for auth components
```

## 🔄 Pull Request Guidelines

### PR Title Format

```
feat: add awesome new feature
fix: resolve critical bug in auth
docs: update contributing guidelines
```

### PR Description Template

```markdown
## 🎯 Description

Brief description of what this PR does.

## 🔗 Related Issue

Closes #123

## 🧪 Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## ✅ Testing

- [ ] I have tested this change locally
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## 📷 Screenshots (if applicable)

Add screenshots to help explain your changes.

## 📝 Additional Notes

Any additional information or context.
```

### Review Process

1. **Automated checks** must pass (linting, build)
2. **Code review** by maintainers
3. **Testing** by reviewers
4. **Approval** and merge

## 🐛 Issue Guidelines

### Bug Reports

Use the bug report template:

```markdown
## 🐛 Bug Description

A clear and concise description of the bug.

## 🔄 Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## 🎯 Expected Behavior

What you expected to happen.

## 📷 Screenshots

If applicable, add screenshots.

## 🖥 Environment

- OS: [e.g. Windows 11, macOS 12]
- Browser: [e.g. Chrome 91, Firefox 89]
- Node.js version: [e.g. 18.17.0]
```

### Feature Requests

Use the feature request template:

```markdown
## 🚀 Feature Description

A clear and concise description of the feature.

## 💡 Motivation

Why would this feature be useful?

## 📋 Detailed Description

Detailed description of the feature.

## 🎨 Mockups/Examples

Any mockups, examples, or references.
```

## 🎃 Hacktoberfest Guidelines

### Hacktoberfest 2025 Participation

- **Quality over Quantity**: We value meaningful contributions
- **Follow the Rules**: Respect [Hacktoberfest rules](https://hacktoberfest.com/participation/)
- **Be Patient**: Reviews may take 2-3 days during high activity
- **Stay Engaged**: Respond to feedback promptly

### Valid Contributions for Hacktoberfest

✅ **Accepted**:

- Bug fixes with proper testing
- New features with documentation
- Significant documentation improvements
- Performance optimizations
- Accessibility improvements

❌ **Not Accepted**:

- Spam or minimal changes
- Automated PRs without review
- Changes that break existing functionality
- Purely cosmetic changes without value

### Hacktoberfest Labels

We use these labels for Hacktoberfest:

- `hacktoberfest` - Eligible for Hacktoberfest
- `hacktoberfest-accepted` - Accepted contribution
- `invalid` - Invalid contribution
- `spam` - Spam contribution

## 🏆 Recognition

### Contributors

All contributors are recognized in:

- **README.md** contributors section
- **GitHub contributors** page
- **Special mentions** in release notes

### Hall of Fame

Outstanding contributors may be featured in our:

- Project documentation
- Social media shoutouts
- Community highlights

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Pull Request Comments**: For code-specific discussions

### Maintainer Response Times

- **Issue Acknowledgment**: Within 2-3 days
- **PR Review**: Within 3-5 days
- **Critical Bugs**: Within 24 hours

### Who to Contact

- **General Questions**: Open a GitHub Discussion
- **Security Issues**: Email maintainers privately
- **Urgent Matters**: Tag `@maintainers` in issues

## 🎉 Thank You

Thank you for considering contributing to HackerBlog! Every contribution, no matter how small, helps make this project better for the entire developer community.

### Final Tips

- **Start Small**: Begin with `good-first-issue` labeled issues
- **Ask Questions**: Don't hesitate to ask for help or clarification
- **Be Patient**: Good things take time, and we appreciate quality work
- **Have Fun**: Enjoy the process of contributing to open source!

---

<div align="center">

**Happy Contributing! 🚀**

_Made with 💜 by the HackerBlog Community_

[![GitHub Issues](https://img.shields.io/github/issues/HacktoberBlog/hackerblog-frontend?style=flat-square)](https://github.com/HacktoberBlog/hackerblog-frontend/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/HacktoberBlog/hackerblog-frontend?style=flat-square)](https://github.com/HacktoberBlog/hackerblog-frontend/pulls)
[![Contributors](https://img.shields.io/github/contributors/HacktoberBlog/hackerblog-frontend?style=flat-square)](https://github.com/HacktoberBlog/hackerblog-frontend/graphs/contributors)

</div>
