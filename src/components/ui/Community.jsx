import { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Users, Send } from "lucide-react";

// Enhanced InfoCard with advanced animations and effects
function InfoCard({ icon, title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glowing border effect */}
      <motion.div
        animate={isHovered ? {
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.02, 1],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-xl blur-xl"
      />
      
      {/* Card content */}
      <div className="relative bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-purple-400/60">
        {/* Animated icon container */}
        <motion.div
          animate={isHovered ? {
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 sm:mb-6 relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <span className="text-2xl sm:text-3xl text-white relative z-10">{icon}</span>
        </motion.div>

        {/* Title with gradient on hover */}
        <motion.h3
          animate={isHovered ? {
            backgroundPosition: ["0% center", "200% center"],
          } : {}}
          transition={{ duration: 2, ease: "linear" }}
          className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4"
          style={{
            background: isHovered 
              ? "linear-gradient(120deg, #ffffff 0%, #a0a0ff 50%, #ec4899 100%)"
              : "#ffffff",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </motion.h3>

        <p className="font-mono text-sm sm:text-base text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Animated corner accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400/60"
        />
      </div>
    </motion.div>
  );
}

// Animated particles for background
function BackgroundParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
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

// Stats counter animation
function AnimatedStat({ value, label, delay }) {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onViewportEnter={() => {
        let start = 0;
        const end = parseInt(value);
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
        {count}+
      </div>
      <div className="text-slate-400 font-mono text-sm sm:text-base">{label}</div>
    </motion.div>
  );
}

function Community() {
  const [userProfile] = useState(null);

  const infoArray = [
    {
      icon: <PenTool />,
      title: "Document Your Wins & Fails",
      description:
        "Share your coding journey - the plot twists, breakthroughs, and those 3AM debugging sessions",
    },
    {
      icon: <Users />,
      title: "Find Your Code Besties",
      description:
        "Network with developers who speak your language and maybe find your next collab partner",
    },
    {
      icon: <Send />,
      title: "Show Off Your Projects",
      description:
        "Display your portfolio and get that validation you deserve from people who actually understand",
    },
  ];

  function handleRedirect(value) {
    console.log(`Navigating to: ${value}`);
  }

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
      {/* Background effects */}
      <BackgroundParticles />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-sm">
              Join Now
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-bold text-4xl sm:text-5xl lg:text-6xl py-2 mb-6"
            style={{
              background: "linear-gradient(120deg, #ffffff 0%, #a0a0ff 50%, #ec4899 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Join Our Growing Community
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block ml-2"
            >
              ✨
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono text-base sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Whether you're here to flex your latest project, learn from the pros, or just vibe with like-minded devs
          </motion.p>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-20 max-w-3xl mx-auto"
        >
          <AnimatedStat value="1000" label="Developers" delay={0.2} />
          <AnimatedStat value="500" label="Articles" delay={0.4} />
          <AnimatedStat value="250" label="Projects" delay={0.6} />
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {infoArray.map((info, index) => (
            <InfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              description={info.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA section */}
        {!userProfile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center relative"
          >
            {/* Glow effect behind CTA */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-purple-500/20 blur-3xl -z-10"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-lg sm:text-xl text-slate-300 mb-8 px-4"
            >
              Ready to level up your developer game? Let's go!
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block ml-2"
              >
                🎮
              </motion.span>
            </motion.p>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(160, 160, 255, 0.3)",
                  "0 0 40px rgba(160, 160, 255, 0.6)",
                  "0 0 20px rgba(160, 160, 255, 0.3)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative font-mono px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-lg sm:text-xl shadow-2xl overflow-hidden group"
              onClick={() => handleRedirect("register")}
            >
              {/* Animated shine effect */}
              <motion.div
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
              
              <span className="relative z-10">Start Your Journey</span>
              
              {/* Arrow animation */}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative z-10 ml-2 inline-block"
              >
                →
              </motion.span>
            </motion.button>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Bottom corner accent */}
      <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 border-r-2 border-b-2 border-purple-500/20" />
    </section>
  );
}

export default Community;