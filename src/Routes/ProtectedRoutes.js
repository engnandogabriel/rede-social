import { useContext } from "react";

import { GlobalUserContext } from "../context/UserContext/UserContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { loged } = useContext(GlobalUserContext);
  if (loged) return <Route {...props} />;
  if (!loged) return <Navigate to="/login" />;
  return null;
};

export default ProtectedRoute;
