# 🚀 HackerBlog - Frontend

> A modern, developer-focused blogging platform where coders share stories, insights, and knowledge - no cap! 🔥

![HackerBlog Banner](https://img.shields.io/badge/HackerBlog-Frontend-blueviolet?style=for-the-badge)
![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)

## ✨ About HackerBlog

HackerBlog is a developer-centric blogging platform designed for the modern coding community. Whether you're documenting your coding journey, sharing breakthrough moments, or spilling the tea on programming concepts, HackerBlog provides a sleek, terminal-inspired interface that speaks your language.

### 🎯 Key Features

- **🌓 Dark Terminal Theme**: Beautiful terminal-inspired UI with MS-DOS style cursors and typewriter animations
- **💜 Modern Purple/Blue Aesthetic**: Custom color scheme with `rgb(160, 160, 255)` accents
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **🔐 Authentication System**: Secure login/register with form validation
- **⚡ Lightning Fast**: Built with Vite for optimal development and production performance
- **🎨 Interactive Animations**: Smooth typewriter effects and hover animations
- **🔥 Gen-Z Friendly**: UI copy that actually gets developers and their vibe

### 🛠 Tech Stack

| Technology       | Purpose                 | Version |
| ---------------- | ----------------------- | ------- |
| **React**        | Frontend Framework      | 19.1.1+ |
| **Vite**         | Build Tool & Dev Server | 7.1.6+  |
| **React Router** | Client-side Routing     | 7.9.3+  |
| **React Icons**  | Icon Library            | 5.5.0+  |
| **Axios**        | HTTP Client             | 1.12.2+ |
| **ESLint**       | Code Linting            | 9.35.0+ |

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **Git**

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HacktoberBlog/hackerblog-frontend.git
   cd hackerblog-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install # or npm i
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### 🏗 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint code analysis                 |

## 🎨 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TopBar.jsx      # Navigation header
│   └── TopBar.css      # TopBar styling
├── pages/              # Page components
│   ├── LandingPage.jsx # Main landing page
│   ├── LandingPage.css # Landing page styles
│   ├── LoginPage.jsx   # User authentication
│   ├── RegisterPage.jsx# User registration
│   └── AuthPages.css   # Auth pages styling
├── routes/             # Route protection
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
├── context/            # React Context
│   └── MyContext.jsx   # Global state management
├── api/                # API integration
│   ├── api.config.js   # Axios configuration
│   ├── api.intercepter.js
│   └── auth/           # Authentication APIs
├── utils/              # Utility functions
└── assets/             # Static assets
```

## 🎭 Features Showcase

### 🖥 Terminal-Inspired Landing Page

- **Authentic terminal window design** with macOS-style controls
- **Typewriter animations** with chunky MS-DOS cursors
- **Command-line interface aesthetics** for that authentic dev feel
- **Hacktoberfest 2025 integration** with contribution opportunities

### 🔐 Modern Authentication

- **Sleek login/register forms** with purple/blue theme
- **Real-time form validation** with helpful error messages
- **Responsive design** that works on all devices
- **Context-based user management** for seamless UX

### 🎨 Custom Design System

- **Consistent purple/blue color palette**
- **Inter font family** for modern typography
- **Gradient backgrounds** and smooth transitions
- **Hover effects** without underlines for clean interactions

## 🤝 Contributing

We welcome contributors of all skill levels! HackerBlog is participating in **Hacktoberfest 2025**.

### 🌟 Contribution Areas

- **🔧 Frontend Development**: React components, UI/UX improvements
- **🐛 Bug Fixes**: Quality assurance and testing
- **📚 Documentation**: README improvements and code comments
- **🎨 Design**: Visual enhancements and animations

### 📋 How to Contribute

1. **Fork the repository**
2. **Create a branch** depending on your contribution type:
   - `feature/amazing-feature` → New feature
   - `fix/bug-description` → Bug fixes
   - `docs/documentation-update` → Documentation updates
3. **Make your changes** following coding standards
4. **Commit your changes**: `git commit -m '<type>: <description>'`
5. **Push to your fork**: `git push origin <your-branch-name>`
6. **Open a Pull Request**

### 🏷 Issue Labels

- `good-first-issue` - Perfect for newcomers
- `hacktoberfest` - Hacktoberfest eligible
- `frontend` - Frontend-related tasks
- `bug` - Bug fixes needed
- `enhancement` - New features or improvements

## 🔗 Related Repositories

- **Backend**: [HacktoberBlog/SpringBootBackend](https://github.com/HacktoberBlog/SpringBootBackend)
- **Organization**: [HacktoberBlog](https://github.com/HacktoberBlog)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing frontend framework
- **Vite Team** for the lightning-fast build tool
- **Hacktoberfest** for promoting open source contributions
- **All Contributors** who make this project possible

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/HacktoberBlog/hackerblog-frontend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/HacktoberBlog/hackerblog-frontend/discussions)
- **Organization**: [@HacktoberBlog](https://github.com/HacktoberBlog)

---

<div align="center">

**Made with 💜 by the HackerBlog Community**

_Where developers share stories, insights, and code - no cap!_ 🔥

[![GitHub stars](https://img.shields.io/github/stars/HacktoberBlog/hackerblog-frontend?style=social)](https://github.com/HacktoberBlog/hackerblog-frontend/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/HacktoberBlog/hackerblog-frontend?style=social)](https://github.com/HacktoberBlog/hackerblog-frontend/network/members)

</div>
