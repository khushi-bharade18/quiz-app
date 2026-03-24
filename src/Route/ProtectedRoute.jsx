import { Navigate, useNavigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
