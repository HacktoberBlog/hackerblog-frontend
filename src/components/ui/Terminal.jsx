import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FiGithub,
  FiCode,
  FiServer,
  FiAlertCircle,
  FiBookOpen,
  FiTerminal,
  FiExternalLink,
} from "react-icons/fi";

function Terminal() {
  const contributionAreas = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description:
        "React.js components, UI/UX improvements, and responsive design",
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description: "Spring Boot APIs, database design, and server-side logic",
    },
    {
      icon: <FiAlertCircle />,
      title: "Bug Fixes & Testing",
      description: "Quality assurance, bug reports, and test case development",
    },
    {
      icon: <FiBookOpen />,
      title: "Documentation",
      description: "README improvements, code comments, and user guides",
    },
  ];

  // refs monitoring when the typing should start
  const cmd1Ref = useRef(null);
  const cmd1InView = useInView(cmd1Ref, { once: true });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const cmd2Ref = useRef(null);
  const cmd2InView = useInView(cmd2Ref, { once: true });

  const cmd3Ref = useRef(null);
  const cmd3InView = useInView(cmd3Ref, { once: true });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* terminal header block */}
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 ml-4 text-slate-400">
              <FiTerminal size={16} />
              <span className="font-google-code text-sm">hacktoberfest-2025</span>
            </div>
          </div>

          {/* terminal content */}
          <div className="p-6 sm:p-8 md:p-10 font-mono">
            {/* first command */}
            <div ref={cmd1Ref} className="mb-6">
              <span className="font-google-code text-[rgb(0,255,0)]">$</span>
              <span className="font-google-code text-[rgb(0,170,255)] ml-2">
                {cmd1InView && (
                  <Typewriter
                    words={["cat hacktoberfest-info.txt"]}
                    typeSpeed={70}
                    cursor
                    cursorStyle="|"
                  />
                )}
              </span>
            </div>

            {/* header nd subtext */}
            <div ref={headerRef}>
              {headerInView && (
                <>
                  <h2 className="font-google-code text-2xl font-bold text-[rgb(0,255,0)] mb-4">
                    <Typewriter
                      words={["Hacktoberfest 2025 Project"]}
                      typeSpeed={70}
                      cursor
                      cursorStyle="|"
                    />
                  </h2>
                  <p className="font-google-code text-slate-300 mb-8 text-sm sm:text-base">
                    <Typewriter
                      words={[
                        "HackerBlog is proudly participating in Hacktoberfest 2025!",
                      ]}
                      typeSpeed={70}
                      cursor
                      cursorStyle="|"
                    />
                  </p>
                </>
              )}
            </div>

            {/* second command */}
            <div ref={cmd2Ref} className="mb-6">
              <span className="font-google-code text-[rgb(0,255,0)]">$</span>
              <span className="font-google-code text-[rgb(0,170,255)] ml-2">
                {cmd2InView && (
                  <Typewriter
                    words={["ls -la contribution-opportunities/"]}
                    typeSpeed={70}
                    cursor
                    cursorStyle="|"
                  />
                )}
              </span>
            </div>

            {/* contribution cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contributionAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-[rgb(0,255,0)] transition-all"
                >
                  <div className="text-[rgb(0,255,0)] mb-2 text-2xl">
                    {area.icon}
                  </div>
                  <h4 className="font-google-code font-bold text-[rgb(0,255,0)] mb-2 text-sm sm:text-base">
                    {area.title}
                  </h4>
                  <p className="font-google-code text-slate-400 text-xs sm:text-sm">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* third command */}
            <div ref={cmd3Ref} className="mb-6">
              <span className="font-google-code text-[rgb(0,255,0)]">$</span>
              <span className="font-google-code text-[rgb(0,170,255)] ml-2">
                {cmd3InView && (
                  <Typewriter
                    words={["open github-repositories"]}
                    typeSpeed={70}
                    cursor
                    cursorStyle="|"
                  />
                )}
              </span>
            </div>

            {/* gitHub repo links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://github.com/HacktoberBlog"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-google-code flex items-center gap-2 px-6 py-3 bg-slate-900 text-[rgb(0,255,0)] hover:bg-[rgb(0,255,0)] hover:text-black border-2 border-[rgb(0,255,0)] rounded-lg font-bold transition-all text-sm sm:text-base"
              >
                <FiGithub size={20} />
                Visit Our Organization
                <FiExternalLink size={16} />
              </motion.a>

              <motion.a
                href="https://github.com/HacktoberBlog/SpringBootBackend"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-google-code flex items-center gap-2 px-6 py-3 bg-slate-900 text-[rgb(0,255,0)] hover:bg-[rgb(0,255,0)] hover:text-black border-2 border-[rgb(0,255,0)] rounded-lg font-bold transition-all text-sm sm:text-base"
              >
                <FiCode size={20} />
                Backend Repository
                <FiExternalLink size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Terminal;
