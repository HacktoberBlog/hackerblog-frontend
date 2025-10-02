// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FiCode,
  FiZap,
  FiUsers,
  FiTerminal,
  FiGithub,
  FiHeart,
} from "react-icons/fi";
import Footer from "../components/Footer";

//? Scroll to top on mount
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <FiTerminal />,
      title: "Terminal-Inspired Interface",
      description:
        "Beautiful MS-DOS style cursors and typewriter animations that make you feel right at home in the command line.",
    },
    {
      icon: <FiZap />,
      title: "Lightning Fast Performance",
      description:
        "Built with Vite and optimized for speed. Your content loads faster than you can say 'npm install'.",
    },
    {
      icon: <FiUsers />,
      title: "Developer Community",
      description:
        "Connect with fellow developers, share your journey, and learn from the experiences of others in the community.",
    },
    {
      icon: <FiCode />,
      title: "Modern Tech Stack",
      description:
        "Powered by React, Spring Boot, and cutting-edge web technologies for a seamless experience.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <div className="min-h-screen bg-gradient-to-b from-[rgb(20,20,48)] via-[rgb(28,28,64)] to-[rgb(15,15,35)] text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-15 text-center bg-gradient-to-b from-[rgba(160,160,255,0.1)] to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-press-start text-3xl sm:text-4xl md:text-5xl text-[rgb(160,160,255)] mb-6 leading-tight">
            About HackerBlog
          </h1>
          <p className="font-google-code text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed">
            Where developers share stories, insights, and code - no cap! 🔥
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-[rgb(160,160,255)] mb-8">
              Our Mission
            </h2>
            <p className="font-google-code text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              HackerBlog is lowkey the blog platform developers have been
              waiting for. We created a space where you can document your coding
              wins and fails, drop tutorials that actually make sense, spill the
              tea on programming concepts, and vibe with a community that gets
              your semicolon struggles.
            </p>
            <p className="font-google-code text-base md:text-lg text-slate-300 leading-relaxed">
              Whether you're documenting your coding journey or sharing that
              breakthrough moment when everything finally clicks - we're here
              for it! Our mission is to provide a platform that feels as
              comfortable as your favorite terminal and as welcoming as your
              first "Hello World" success. ✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[rgba(160,160,255,0.05)] border-t border-b border-[rgba(160,160,255,0.2)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-google-code text-3xl md:text-4xl font-bold text-[rgb(160,160,255)] mb-12 text-center"
          >
            What Makes Us Different
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-[rgb(20,20,48)] to-[rgb(28,28,64)] p-6 md:p-8 rounded-xl border border-[rgba(160,160,255,0.2)] hover:border-[rgb(160,160,255)] transition-all duration-300 shadow-lg hover:shadow-[0_8px_24px_rgba(160,160,255,0.2)]"
              >
                <div className="text-[rgb(160,160,255)] mb-4 text-4xl md:text-5xl flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-google-code text-lg md:text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="font-google-code text-sm md:text-base text-slate-400 leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-[rgb(160,160,255)] mb-8">
              Built With Modern Tech
            </h2>
            <p className="font-google-code text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              HackerBlog is built using cutting-edge technologies to ensure the
              best developer experience:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
              <div className="bg-[rgba(160,160,255,0.1)] p-6 rounded-lg border border-[rgba(160,160,255,0.2)] flex flex-col gap-2">
                <span className="font-google-code text-[rgb(160,160,255)] font-semibold text-sm md:text-base">
                  Frontend:
                </span>
                <span className="font-google-code text-white text-lg md:text-xl">
                  React.js + Vite
                </span>
              </div>
              <div className="bg-[rgba(160,160,255,0.1)] p-6 rounded-lg border border-[rgba(160,160,255,0.2)] flex flex-col gap-2">
                <span className="font-google-code text-[rgb(160,160,255)] font-semibold text-sm md:text-base">
                  Backend:
                </span>
                <span className="font-google-code text-white text-lg md:text-xl">
                  Spring Boot
                </span>
              </div>
              <div className="bg-[rgba(160,160,255,0.1)] p-6 rounded-lg border border-[rgba(160,160,255,0.2)] flex flex-col gap-2">
                <span className="font-google-code text-[rgb(160,160,255)] font-semibold text-sm md:text-base">
                  Styling:
                </span>
                <span className="font-google-code text-white text-lg md:text-xl">
                  Tailwind CSS
                </span>
              </div>
              <div className="bg-[rgba(160,160,255,0.1)] p-6 rounded-lg border border-[rgba(160,160,255,0.2)] flex flex-col gap-2">
                <span className="font-google-code text-[rgb(160,160,255)] font-semibold text-sm md:text-base">
                  Animations:
                </span>
                <span className="font-google-code text-white text-lg md:text-xl">
                  Framer Motion
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-google-code text-3xl md:text-4xl font-bold text-[rgb(160,160,255)] mb-8">
              Open Source & Community Driven
            </h2>
            <p className="font-google-code text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              HackerBlog is proudly open source and participating in
              Hacktoberfest 2025! We believe in the power of community
              collaboration and welcome contributions from developers of all
              skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://github.com/HacktoberBlog"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-google-code flex items-center gap-2 px-6 py-3 bg-[rgb(160,160,255)] text-[rgb(28,28,64)] rounded-lg font-bold transition-all shadow-lg hover:shadow-[0_4px_12px_rgba(160,160,255,0.3)] w-full sm:w-auto justify-center"
              >
                <FiGithub size={20} />
                Visit Our GitHub
              </motion.a>
              <motion.a
                href="https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-google-code flex items-center gap-2 px-6 py-3 bg-transparent text-[rgb(160,160,255)] border-2 border-[rgb(160,160,255)] rounded-lg font-bold transition-all hover:bg-[rgb(160,160,255)] hover:text-[rgb(28,28,64)] w-full sm:w-auto justify-center"
              >
                <FiHeart size={20} />
                Contribute
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
