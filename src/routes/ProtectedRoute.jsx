import { Navigate } from "react-router-dom";
import { useMyContext } from "../context/MyContext";

function ProtectedRoute({ children }) {
  const { userProfile, isAuthenticated } = useMyContext();

  // Check if user is authenticated using context state
  if (!userProfile || !isAuthenticated) {
    console.log('ProtectedRoute - Redirecting to login');
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
