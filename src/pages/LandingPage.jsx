import Hero from "../components/ui/Hero";
import About from "../components/ui/About";
import Terminal from "../components/ui/Terminal";
import Community from "../components/ui/Community";
import Footer from "../components/Footer";
import Card from "../components/articles/Card";

// modularized the code for readablity as requested in the issue
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* hero section */}
      <Hero />
      {/* about section */}
      <About />
      {/* articles section will be added here in future */}
      <Card />
      {/* hacktoberfest terminal section */}
      <Terminal />
      {/* community section */}
      <Community />
      {/* future footer component will be added here */}
      <Footer />
    </div>
  );
};

export default LandingPage;
