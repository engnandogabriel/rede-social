import { useContext } from "react";

import { GlobalUserContext } from "../context/UserContext/UserContext";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { loged } = useContext(GlobalUserContext);
  if (loged === true) return <Route {...props} />;
  else if (loged === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
