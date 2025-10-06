import { motion } from 'framer-motion';

function About() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--bg-gradient)", color: "var(--text-color)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="font-google-code text-4xl font-bold mb-6 py-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, var(--brand-color), var(--brand-hover-color))",
              backgroundSize: "200% auto",
            }}
          >
            A Blog Platform That Actually Gets It
          </h2>
          <p
            className="font-google-code max-w-4xl mx-auto leading-relaxed px-4"
            style={{ color: "var(--text-color)" }}
          >
            HackerBlog is lowkey the blog platform developers have been waiting for. Share your coding wins and fails, drop tutorials that actually make sense, spill the tea on programming concepts, and vibe with a community that gets your semicolon struggles. Whether you're documenting your coding journey or sharing that breakthrough moment when everything finally clicks - we're here for it! ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
