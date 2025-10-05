import { motion } from "framer-motion";
import { useState } from "react";
import HeroAnimation from "../animations/HeroAnimation";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [userProfile] = useState(null);
  const navigate = useNavigate();

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

  function handleRedirect(value) {
    if (value === "register") navigate("/register");
    else if (value === "login") navigate("/login");
    else navigate("/dashboard");
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      style={{ background: "var(--bg-gradient)", color: "var(--text-color)" }}
    >
      {/* Top animation */}
      <HeroAnimation className="absolute top-[5%] right-[2%] sm:top-[8%] sm:right-[4%] lg:top-[10%] lg:right-[5%] scale-50 sm:scale-75 lg:scale-100" />

      {/* Bottom animation */}
      <HeroAnimation
        className="absolute bottom-[5%] left-[2%] sm:bottom-[8%] sm:left-[4%] lg:bottom-[10%] lg:left-[5%] scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: "rotate(180deg)" }}
      />

      {/* Subtle central animation effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--brand-color) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Hero contents */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <motion.h1
            className="font-press-start text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 py-3 sm:py-4 bg-clip-text text-transparent leading-tight px-2"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(90deg, var(--brand-color), var(--brand-hover-color))",
              backgroundSize: "200% auto",
            }}
          >
            HackerBlog
          </motion.h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-google-code text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 px-4 sm:px-6 max-w-3xl mx-auto leading-relaxed"
          style={{ color: "var(--text-color)" }}
        >
          Where developers share stories, insights, and code - no cap! 🔥
        </motion.p>

        {!userProfile ? (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-google-code w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transition-all"
              style={{
                backgroundColor: "var(--brand-color)",
                color: "var(--text-color)",
              }}
              onClick={() => handleRedirect("register")}
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-google-code w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transition-all border-2"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--brand-color)",
                color: "var(--text-color)",
              }}
              onClick={() => handleRedirect("login")}
            >
              Sign In
            </motion.button>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants} className="space-y-4 px-4 sm:px-6">
            <p className="font-google-code text-lg sm:text-xl" style={{ color: "var(--text-color)" }}>
              Welcome back, {userProfile.name || "Developer"}! Ready to drop some fire content? 🚀
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-google-code px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transition-all"
              style={{
                backgroundColor: "var(--brand-color)",
                color: "var(--text-color)",
              }}
              onClick={() => handleRedirect("dashboard")}
            >
              Go to Dashboard
            </motion.button>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-12 sm:mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl sm:text-4xl"
            style={{ color: "var(--text-color)" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
