import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import FeaturesPage from "./pages/FeaturesPage";

// Placeholder component for dashboard
const DashboardPage = () => (
  <div style={{ padding: "2rem", textAlign: "center", color: "#f9fafb" }}>
    <h2>Dashboard</h2>
    <p>
      Welcome to your dashboard! User functionality will be implemented here.
    </p>
  </div>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
  },
  {
    path: "/features",
    element: (
      <Layout>
        <FeaturesPage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Layout>
          <LoginPage />
        </Layout>
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Layout>
          <RegisterPage />
        </Layout>
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout>
          <DashboardPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
]);

export default routes;
