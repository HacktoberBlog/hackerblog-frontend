import { Navigate } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import { isAuthenticated } from "../api";

function ProtectedRoute({ children }) {
  const { userProfile } = useMyContext();
  
  // Check both localStorage token and context user profile
  if (!isAuthenticated() && !userProfile) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
