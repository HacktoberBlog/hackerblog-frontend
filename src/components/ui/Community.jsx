import { useState } from "react";
import InfoCard from "./InfoCard";
import { motion } from "framer-motion";
import { FiPenTool, FiUsers, FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Community() {
  const [userProfile] = useState(null);
  const navigate = useNavigate();

  const infoArray = [
    {
      icon: <FiPenTool />,
      title: "Document Your Wins & Fails",
      description:
        "Share your coding journey - the plot twists, breakthroughs, and those 3AM debugging sessions",
    },
    {
      icon: <FiUsers />,
      title: "Find Your Code Besties",
      description:
        "Network with developers who speak your language and maybe find your next collab partner",
    },
    {
      icon: <FiSend />,
      title: "Show Off Your Projects",
      description:
        "Display your portfolio and get that validation you deserve from people who actually understand",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--bg-gradient)", color: "var(--text-color)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="font-google-code text-4xl py-2 font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, var(--brand-color), var(--brand-hover-color))",
              backgroundSize: "200% auto",
            }}
          >
            Join Our Growing Community ✨
          </h2>
          <p className="font-google-code max-w-4xl mx-auto leading-relaxed" style={{ color: "var(--text-color)" }}>
            Whether you're here to flex your latest project, learn from the pros...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        {!userProfile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-google-code text-xl mb-6" style={{ color: "var(--text-color)" }}>
              Ready to level up your developer game? Let's go! 🎮
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-google-code px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all"
              style={{
                backgroundColor: "var(--brand-color)",
                color: "var(--text-color)",
              }}
              onClick={() => navigate("/register")}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Community;
