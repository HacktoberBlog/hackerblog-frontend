import { Navigate } from "react-router-dom";
import { useMyContext } from "../context/MyContext";

function PublicRoute({ children }) {
  const { isAuthenticated } = useMyContext();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;
