import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Lightbulb, Users2, Rocket } from 'lucide-react';

// Feature card component
function FeatureCard({ icon: Icon, title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={isHovered ? {
          rotate: [0, 5, -5, 0],
        } : {}}
        transition={{ duration: 0.5 }}
        className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 h-full hover:border-purple-400/50 transition-all"
      >
        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
        <p className="font-mono text-sm text-slate-400">{description}</p>

        {/* Corner glow */}
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

// Floating code snippets background
function FloatingCodeSnippets() {
  const codeSnippets = [
    '{ }',
    '< />',
    '( )',
    '=>',
    '===',
    'fn()',
    '[ ]',
    '...',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-purple-400 text-2xl font-bold"
          style={{
            left: `${(i * 12.5) % 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}

// Animated text highlight
function AnimatedHighlight({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative inline-block"
      style={{
        background: "linear-gradient(to right, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
      }}
    >
      {children}
    </motion.span>
  );
}

function About() {
  const features = [
    {
      icon: Code2,
      title: "Share Your Code Journey",
      description: "Document wins, fails, and those 3AM debugging victories"
    },
    {
      icon: Lightbulb,
      title: "Drop Knowledge Bombs",
      description: "Write tutorials that actually make sense to real developers"
    },
    {
      icon: Users2,
      title: "Vibe With Your Tribe",
      description: "Connect with devs who get your semicolon struggles"
    },
    {
      icon: Rocket,
      title: "Launch Your Ideas",
      description: "Share breakthrough moments when everything finally clicks"
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background effects */}
      <FloatingCodeSnippets />
      
      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Tag label */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-sm backdrop-blur-sm">
              About Us
            </span>
          </motion.div>

          {/* Animated title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-8 px-4"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% center", "200% center"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(120deg, #ffffff 0%, #a0a0ff 50%, #ec4899 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A Blog Platform That Actually Gets It
            </motion.span>
          </motion.h2>

          {/* Description with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-mono text-base sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 space-y-4"
          >
            <p>
              HackerBlog is <AnimatedHighlight delay={0.6}>lowkey the blog platform</AnimatedHighlight> developers have been waiting for. 
              Share your coding wins and fails, drop tutorials that actually make sense, spill the tea on programming concepts, 
              and vibe with a community that gets your semicolon struggles.
            </p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Whether you're documenting your coding journey or sharing that breakthrough moment when everything finally clicks - 
              we're here for it!
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block ml-2"
              >
                ✨
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 sm:p-12"
        >
          {/* Animated border glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl"
          />

          <div className="relative z-10 text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-bold text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Built by developers, for developers
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-slate-400 max-w-2xl mx-auto"
            >
              No fluff, no corporate speak, just a straightforward platform where you can share your code, 
              your struggles, and your victories with people who actually understand.
            </motion.p>

            {/* Decorative code line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
          </div>
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center gap-3"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 border-r-2 border-t-2 border-purple-500/20" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 border-l-2 border-b-2 border-purple-500/20" />
    </section>
  );
}

export default About;