import {
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Lenis from "@studio-freight/lenis";

// ===== Scroll & Smooth Wrapper =====
const SmoothScrollWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.0, // higher = heavier / more viscous feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    // RAF loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Scroll to top smoothly on route change
    lenis.scrollTo(0, { offset: 0, duration: 1.2 });

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#f9fafb",
        animation: "fadeIn 0.6s ease-in-out",
      }}
    >
      {children}
      <style>
        {`
          html {
            scroll-behavior: auto; /* Let Lenis handle it */
          }
          body {
            overflow: visible; /* ✅ keep scroll enabled */
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

// ===== Dashboard Placeholder =====
const DashboardPage = () => (
  <div style={{ padding: "2rem", textAlign: "center", color: "#f9fafb" }}>
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard! User functionality will be implemented here.</p>
    {/* Extra content for scroll testing */}
    <div style={{ height: "200vh" }}></div>
  </div>
);

// ===== Routes =====
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <SmoothScrollWrapper>
        <Layout>
          <LandingPage />
        </Layout>
      </SmoothScrollWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <SmoothScrollWrapper>
        <PublicRoute>
          <Layout>
            <LoginPage />
          </Layout>
        </PublicRoute>
      </SmoothScrollWrapper>
    ),
  },
  {
    path: "/register",
    element: (
      <SmoothScrollWrapper>
        <PublicRoute>
          <Layout>
            <RegisterPage />
          </Layout>
        </PublicRoute>
      </SmoothScrollWrapper>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <SmoothScrollWrapper>
        <ProtectedRoute>
          <Layout>
            <DashboardPage />
          </Layout>
        </ProtectedRoute>
      </SmoothScrollWrapper>
    ),
  },
]);

export default routes;
