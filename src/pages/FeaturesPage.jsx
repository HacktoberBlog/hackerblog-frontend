// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiTerminal,
  FiZap,
  FiLock,
  FiSmartphone,
  FiCode,
  FiUsers,
  FiEdit3,
  FiTag,
  FiSearch,
  FiBarChart2,
  FiGithub,
  FiHeart,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const FeaturesPage = () => {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      icon: <FiTerminal />,
      title: "Terminal-Inspired Interface",
      description:
        "Experience coding nostalgia with our MS-DOS style cursors, typewriter animations, and authentic terminal aesthetic that makes you feel right at home.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <FiZap />,
      title: "Lightning Fast Performance",
      description:
        "Built with Vite for blazing-fast load times and smooth interactions. Your content loads faster than you can say 'console.log()'.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FiLock />,
      title: "Secure Authentication",
      description:
        "Rock-solid security with JWT tokens, form validation, and protected routes. Your account and content are safe with us.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FiSmartphone />,
      title: "Fully Responsive Design",
      description:
        "Seamless experience across all devices - desktop, tablet, or mobile. Write and read anywhere, anytime.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const contentFeatures = [
    {
      icon: <FiEdit3 />,
      title: "Rich Text Editor",
      description:
        "Create beautiful blog posts with our intuitive editor. Support for code syntax highlighting, markdown, and more.",
    },
    {
      icon: <FiTag />,
      title: "Smart Tagging System",
      description:
        "Organize your content with tags and categories. Make it easy for others to discover your posts.",
    },
    {
      icon: <FiSearch />,
      title: "Powerful Search",
      description:
        "Find exactly what you're looking for with our fast search functionality. Filter by tags, authors, or keywords.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Analytics Dashboard",
      description:
        "Track your post performance, views, and engagement. See what resonates with your audience.",
    },
  ];

  const communityFeatures = [
    {
      icon: <FiUsers />,
      title: "Developer Community",
      description:
        "Connect with fellow developers, share experiences, and learn from each other's journeys.",
    },
    {
      icon: <FiHeart />,
      title: "Engagement Features",
      description:
        "Like, comment, and bookmark posts. Build meaningful connections with content creators.",
    },
    {
      icon: <FiGithub />,
      title: "GitHub Integration",
      description:
        "Showcase your repositories and open source contributions directly on your profile.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Trending Content",
      description:
        "Discover what's hot in the developer community. Never miss the latest trends and insights.",
    },
  ];

  const designFeatures = [
    {
      title: "Dark Terminal Theme",
      description: "Easy on the eyes, perfect for late-night coding sessions",
      emoji: "🌓",
    },
    {
      title: "Purple/Blue Aesthetic",
      description: "Modern color palette that's both professional and vibrant",
      emoji: "💜",
    },
    {
      title: "Smooth Animations",
      description: "Framer Motion powered transitions that feel buttery smooth",
      emoji: "✨",
    },
    {
      title: "Gen-Z Friendly",
      description: "UI copy that actually speaks your language - no cap!",
      emoji: "🔥",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgb(160, 160, 255) 0%, transparent 50%)",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(160,160,255,0.1)] border border-[rgba(160,160,255,0.3)] rounded-full text-[rgb(160,160,255)] font-google-code text-sm">
              <FiStar className="animate-pulse" />
              Discover What Makes Us Different
            </span>
          </motion.div>

          <h1 className="font-press-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[rgb(160,160,255)] mb-6 leading-tight">
            Features Built for Developers
          </h1>
          <p className="font-google-code text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Everything you need to document your coding journey, share
            knowledge, and connect with the community - all in one place 🚀
          </p>
        </motion.div>
      </section>

      {/* Core Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-white mb-4">
              Core Features
            </h2>
            <p className="font-google-code text-slate-400 text-lg max-w-2xl mx-auto">
              The foundation of an exceptional blogging experience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-xl border border-slate-700 group-hover:border-[rgb(160,160,255)] transition-all duration-300 h-full">
                  <div
                    className={`text-5xl md:text-6xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-google-code text-xl md:text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-google-code text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Creation Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[rgba(160,160,255,0.03)] border-t border-b border-[rgba(160,160,255,0.1)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-white mb-4">
              Content Creation Tools
            </h2>
            <p className="font-google-code text-slate-400 text-lg max-w-2xl mx-auto">
              Powerful tools to bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-[rgb(160,160,255)] transition-all duration-300"
              >
                <div className="text-[rgb(160,160,255)] text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-google-code text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-google-code text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-white mb-4">
              Community & Collaboration
            </h2>
            <p className="font-google-code text-slate-400 text-lg max-w-2xl mx-auto">
              Connect, engage, and grow together
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-[rgb(160,160,255)] transition-all duration-300"
              >
                <div className="text-[rgb(160,160,255)] text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-google-code text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-google-code text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[rgba(160,160,255,0.03)] border-t border-b border-[rgba(160,160,255,0.1)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-white mb-4">
              Design That Developers Love
            </h2>
            <p className="font-google-code text-slate-400 text-lg max-w-2xl mx-auto">
              Aesthetics meet functionality
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {designFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-[rgb(160,160,255)] transition-all duration-300"
              >
                <div className="text-4xl flex-shrink-0">{feature.emoji}</div>
                <div>
                  <h3 className="font-google-code text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-google-code text-sm text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl border border-[rgba(160,160,255,0.3)] shadow-2xl"
          >
            <h2 className="font-google-code text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="font-google-code text-slate-300 mb-8 text-lg">
              Join thousands of developers sharing their stories on HackerBlog.
              It's free, fast, and built just for you! 🎉
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="font-google-code px-8 py-4 bg-[rgb(160,160,255)] text-[rgb(28,28,64)] rounded-lg font-bold text-lg shadow-lg transition-all"
              >
                Create Free Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="font-google-code px-8 py-4 bg-transparent border-2 border-[rgb(160,160,255)] text-[rgb(160,160,255)] rounded-lg font-bold text-lg hover:bg-[rgb(160,160,255)] hover:text-[rgb(28,28,64)] transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeaturesPage;
