import { motion } from "framer-motion";
import { useState } from "react";
import HeroAnimation from "../animations/HeroAnimation";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [userProfile] = useState(true);

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

  const navigate=useNavigate();

  function handleRedirect(value){
    if(value==="register"){navigate("/register")}
    else if(value==="login"){navigate("/login")}
    else{navigate("/dashboard")}
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* top animation */}
      <HeroAnimation className="absolute top-[10%] right-[5%]" />

      {/* bottom animation */}
      <HeroAnimation
        className="absolute bottom-[10%] left-[5%]"
        style={{ transform: 'rotate(180deg)' }}
      />

      {/* subtle central animation effect */}
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
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #8b5cf6 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* hero contents */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 py-4 bg-white bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            HackerBlog
          </motion.h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 px-4 max-w-3xl mx-auto"
        >
          Where developers share stories, insights, and code - no cap! 🔥
        </motion.p>

        {!userProfile ? (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-[rgb(160,160,255)] text-[rgb(28,28,64)] rounded-lg font-bold text-lg shadow-lg transition-all"
              onClick={()=>handleRedirect("register")}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 border-2 border-slate-300 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all"
              onClick={()=>handleRedirect("login")}
            >
              Sign In
            </motion.button>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-xl text-slate-300">
              Welcome back, {userProfile.name || "Developer"}! Ready to drop
              some fire content? 🚀
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[rgb(160,160,255)] text-[rgb(28,28,64)] rounded-lg font-bold text-lg shadow-lg"
              onClick={()=>handleRedirect("dashboard")}
            >
              Go to Dashboard
            </motion.button>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-300 text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
