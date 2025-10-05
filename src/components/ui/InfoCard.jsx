import { motion } from "framer-motion";

const InfoCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-6 rounded-xl border transition-all duration-300 shadow-lg"
      style={{
        background: "var(--card-gradient)",
        borderColor: "var(--card-border)",
        color: "var(--text-color)",
      }}
    >
      <div
        className="mb-4 text-4xl flex justify-center"
        style={{ color: "var(--brand-color)" }}
      >
        {icon}
      </div>
      <h3
        className="font-google-code text-xl font-bold mb-2 text-center"
        style={{ color: "var(--text-color)" }}
      >
        {title}
      </h3>
      <p
        className="font-google-code text-sm leading-relaxed text-center"
        style={{ color: "var(--text-muted)" }}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default InfoCard;
