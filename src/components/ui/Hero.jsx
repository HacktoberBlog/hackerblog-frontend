import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

// Lightweight typewriter hook
function useTypewriter(words, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient background
function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      />
    </div>
  );
}

// Scroll indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-6 h-10 border-2 border-slate-400 rounded-full p-1 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-2 bg-slate-400 rounded-full mx-auto"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-slate-300 text-2xl sm:text-3xl"
      >
        ↓
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const [userProfile] = useState(null);
  const phrases = ["Code.", "Create.", "Connect."];
  const typedText = useTypewriter(phrases, 120, 80, 1500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(160, 160, 255, 0.3)",
        "0 0 40px rgba(160, 160, 255, 0.6)",
        "0 0 20px rgba(160, 160, 255, 0.3)",
      ],
    },
  };

  function handleRedirect(value) {
    console.log(`Navigating to: ${value}`);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated gradient background */}
      <AnimatedGradient />
      
      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid overlay for hacker aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <motion.h1
            className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4 py-3 sm:py-4 leading-tight px-2"
            style={{
              background: "linear-gradient(120deg, #ffffff 0%, #a0a0ff 50%, #ec4899 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            HackerBlog
          </motion.h1>
          
          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-mono text-purple-400 h-12 sm:h-16 flex items-center justify-center"
          >
            <span className="text-purple-300/60">&gt;</span>
            <span className="ml-2">{typedText}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-purple-400"
            >
              _
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 px-4 sm:px-6 max-w-3xl mx-auto leading-relaxed"
        >
          Where developers share stories, insights, and code - no cap! 🔥
        </motion.p>

        {!userProfile ? (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 sm:px-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={glowVariants}
              animate="animate"
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="font-mono w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-base sm:text-lg shadow-xl relative overflow-hidden group"
              onClick={() => handleRedirect("register")}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Get Started</span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                borderColor: "rgba(160, 160, 255, 1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-mono w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/50 text-slate-200 rounded-lg font-bold text-base sm:text-lg hover:bg-slate-700/50 transition-all shadow-lg"
              onClick={() => handleRedirect("login")}
            >
              Sign In
            </motion.button>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants} className="space-y-4 px-4 sm:px-6">
            <p className="font-mono text-lg sm:text-xl text-slate-300">
              Welcome back, {userProfile.name || "Developer"}! Ready to drop
              some fire content? 🚀
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-base sm:text-lg shadow-xl"
              onClick={() => handleRedirect("dashboard")}
            >
              Go to Dashboard
            </motion.button>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-16 sm:mt-20 flex justify-center">
          <ScrollIndicator />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/30" />
    </section>
  );
}

export default Hero;