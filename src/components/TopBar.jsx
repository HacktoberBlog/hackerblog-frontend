import { Link } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import { useState } from "react";
import { motion } from "framer-motion";

const TopBar = () => {
  const { userProfile, clearUserProfile } = useMyContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    clearUserProfile();
    setMenuOpen(false); // close menu after logout
    // Add any additional logout logic here if needed
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header
      className="sticky top-0 z-50 text-white shadow-md border-b"
      style={{
        background:
          "linear-gradient(135deg, rgb(28,28,64) 0%, rgb(36,36,80) 100%)",
        borderBottomColor: "rgba(160,160,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-press-start text-lg sm:text-xl text-[rgb(160,160,255)] tracking-tight"
          >
            HackerBlog
          </motion.h1>
        </Link>

        {/* Hamburger Button */}
        <button
          className="text-[rgb(160,160,255)] text-2xl sm:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-4">
          {userProfile ? (
            <>
              <span className="font-google-code text-sm text-slate-300">
                Welcome, {userProfile.name || "User"}!
              </span>
              <button
                onClick={handleLogout}
                className="font-google-code px-5 py-2 rounded-lg bg-red-400 text-white font-semibold text-sm hover:bg-red-500 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-google-code px-5 py-2 rounded-lg border-2 border-[rgb(160,160,255)] text-[rgb(160,160,255)] text-sm font-semibold hover:bg-[rgb(160,160,255)] hover:text-[rgb(28,28,64)] transition-all"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className="font-google-code px-5 py-2 rounded-lg bg-[rgb(160,160,255)] text-[rgb(28,28,64)] text-sm font-semibold hover:bg-[rgb(140,140,255)] transition-all"
              >
                SIGN UP
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:hidden flex-col fixed top-16 right-0 w-56 h-[calc(100vh-60px)] bg-[rgb(28,28,64)] border-l border-[rgba(160,160,255,0.1)] border-b p-4 gap-4 z-40`}
        >
          {userProfile ? (
            <div className="flex flex-col items-start gap-3">
              <span className="font-google-code text-sm text-slate-300">
                Welcome, {userProfile.name || "User"}!
              </span>
              <button
                onClick={handleLogout}
                className="font-google-code px-5 py-2 rounded-lg bg-red-400 text-white font-semibold text-sm hover:bg-red-500 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="font-google-code px-5 py-2 rounded-lg border-2 border-[rgb(160,160,255)] text-[rgb(160,160,255)] text-sm font-semibold hover:bg-[rgb(160,160,255)] hover:text-[rgb(28,28,64)] transition-all"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="font-google-code px-5 py-2 rounded-lg bg-[rgb(160,160,255)] text-[rgb(28,28,64)] text-sm font-semibold hover:bg-[rgb(140,140,255)] transition-all"
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
