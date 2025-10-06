import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaRegClock,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaShareAlt,
  FaBookmark,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion as Motion, AnimatePresence } from "framer-motion";

function Card({ articles }) {
  const [expanded, setExpanded] = useState(() =>
    Array(articles.length).fill(false)
  );
  const descRefs = useRef([]);

  useEffect(() => {
    setExpanded(Array(articles.length).fill(false));
  }, [articles]);

  const toggleExpand = (idx) => {
    setExpanded((prev) =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
    setTimeout(() => {
      if (descRefs.current[idx]) {
        descRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 200);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#00ff00] font-mono tracking-tight">
        Latest Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => {
          const isLong = article.description.length > 120;
          const showFull = expanded[idx];
          const preview = isLong
            ? article.description.slice(0, 120) + "..."
            : article.description;

          return (
            <Motion.div
              key={idx}
              className="bg-[#1a1a1a] text-[#cccccc] rounded-xl shadow-lg overflow-hidden border border-[#333] hover:border-[#00ff00] hover:shadow-green-500/10 transition-all duration-300 font-mono"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover border-b-2 border-[#222]"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-[#00ff00] font-mono">
                  {article.title}
                </h3>

                {/* Description section with animation */}
                <AnimatePresence initial={false}>
                  <Motion.p
                    ref={el => descRefs.current[idx] = el}
                    key={showFull ? `expanded-${idx}` : `collapsed-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#cccccc] mb-2 overflow-hidden"
                  >
                    {showFull ? article.description : preview}
                  </Motion.p>
                </AnimatePresence>

                {isLong && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    aria-expanded={showFull}
                    className="text-[#00ff00] hover:text-[#1aff66] font-mono text-xs inline-flex items-center gap-1 focus:outline-none mb-3"
                  >
                    {showFull ? (
                      <>
                        Show less <FaChevronUp className="inline-block" />
                      </>
                    ) : (
                      <>
                        Read more <FaChevronDown className="inline-block" />
                      </>
                    )}
                  </button>
                )}

                {/* Author and time */}
                <div className="flex items-center text-xs text-gray-400 mb-3 flex-wrap gap-2">
                  <span>
                    By{" "}
                    <span className="text-[#1aff66] font-semibold">
                      {article.author}
                    </span>
                  </span>
                  <div className="flex items-center gap-1">
                    <FaRegClock /> <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Footer actions */}
                <div className="flex justify-between items-center">
                  <Link
                    to={article.link}
                    className="text-[#00ff00] hover:text-[#1aff66] border-b border-dashed border-[#00ff00] hover:border-[#1aff66] transition-colors duration-200 font-mono text-sm"
                  >
                    Go to Article
                  </Link>

                  <div className="flex space-x-3">
                    <Motion.button
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-[#00ff00] transition-colors duration-200"
                      title="Like"
                    >
                      <FaRegThumbsUp />
                    </Motion.button>

                    <Motion.button
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      title="Dislike"
                    >
                      <FaRegThumbsDown />
                    </Motion.button>

                    <Motion.button
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-[#00ff00] transition-colors duration-200"
                      title="Share"
                    >
                      <FaShareAlt />
                    </Motion.button>

                    <Motion.button
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                      title="Bookmark"
                    >
                      <FaBookmark />
                    </Motion.button>
                  </div>
                </div>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
