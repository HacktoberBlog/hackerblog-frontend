import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaRegThumbsUp, FaRegThumbsDown, FaShareAlt, FaBookmark, FaChevronDown, FaChevronUp } from "react-icons/fa";

const articles = [
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "Understanding React Context API",
    description: "A deep dive into the React Context API and how to use it effectively in your applications. The Context API is a powerful feature in React that allows you to share state across the entire app lightly and with ease. In this article, we will explore its use cases, implementation, and best practices for scalable applications.",
    author: "Alex Johnson",
    readTime: "5 min read",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    title: "Top 10 JavaScript ES6 Features",
    description: "Explore the most important ES6 features every JavaScript developer should know. From arrow functions to destructuring, ES6 brought a lot of improvements to the language. This article covers the top features and how they can improve your code.",
    author: "Priya Singh",
    readTime: "7 min read",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Mastering CSS Grid Layout",
    description: "Learn how to build complex and responsive layouts easily using CSS Grid. CSS Grid is a two-dimensional layout system that enables developers to create web layouts quickly and efficiently. This guide will help you master the basics and advanced techniques.",
    author: "Samuel Lee",
    readTime: "6 min read",
    link: "#",
  },
];

function Card() {
  // Track which articles are expanded
  const [expanded, setExpanded] = useState(Array(articles.length).fill(false));

  const toggleExpand = (idx) => {
    setExpanded((prev) =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#00ff00] font-mono tracking-tight">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => {
          const isLong = article.description.length > 120;
          const showFull = expanded[idx];
          const desc = isLong && !showFull
            ? article.description.slice(0, 120) + "..."
            : article.description;
          return (
            <div
              key={idx}
              className="bg-[#1a1a1a] text-[#cccccc] rounded-xl shadow-lg overflow-hidden border border-[#333] hover:border-[#00ff00] hover:shadow-green-500/10 transition-all duration-300 font-mono"
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
                <p className="mb-2 text-[#cccccc]">
                  {desc}
                  {isLong && (
                    <button
                      className="ml-2 text-[#00ff00] hover:text-[#1aff66] font-mono text-xs focus:outline-none inline-flex items-center"
                      onClick={() => toggleExpand(idx)}
                      aria-label={showFull ? "Show less" : "Show more"}
                    >
                      {showFull ? (
                        <>
                          Show less <FaChevronUp className="ml-1" />
                        </>
                      ) : (
                        <>
                          Read more <FaChevronDown className="ml-1" />
                        </>
                      )}
                    </button>
                  )}
                </p>
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <span className="mr-2">
                    By <span className="text-[#1aff66] font-semibold">{article.author}</span>
                  </span>
                  <FaRegClock className="mx-1" /> <span>{article.readTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to={article.link}
                    className="text-[#00ff00] hover:text-[#1aff66] border-b border-dashed border-[#00ff00] hover:border-[#1aff66] transition-colors duration-200 font-mono"
                  >
                    Go to Article
                  </Link>
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-[#00ff00] transition-colors duration-200" title="Like">
                      <FaRegThumbsUp />
                    </button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors duration-200" title="Dislike">
                      <FaRegThumbsDown />
                    </button>
                    <button className="text-gray-400 hover:text-[#00ff00] transition-colors duration-200" title="Share">
                      <FaShareAlt />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-400 transition-colors duration-200" title="Bookmark">
                      <FaBookmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
