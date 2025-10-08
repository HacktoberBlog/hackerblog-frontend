// components/ScrollToTopButton.tsx
import { useEffect, useState } from "react";
import image from "../assets/ScrollToTop.png"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    // Scroll to top button
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#A0A0FF] text-white shadow-lg hover:bg-violet-700 transition-colors duration-300"
      aria-label="Scroll to top"
    >
      {/* Up arrow image */}
      <img src={image} alt="" className="h-8 w-8 hover:invert-100" />
    </button>
  );
};

export default ScrollToTopButton;
