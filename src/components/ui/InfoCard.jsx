import { motion } from 'framer-motion';

const InfoCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-[#a0a0ff] transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
    >
      <div className="text-[#a0a0ff] mb-4 text-4xl flex justify-center">
        {icon}
      </div>
      <h3 className="font-google-code text-xl font-bold text-white mb-2 text-center">{title}</h3>
      <p className="font-google-code text-slate-400 text-sm leading-relaxed text-center">{description}</p>
    </motion.div>
  );
};
export default InfoCard;