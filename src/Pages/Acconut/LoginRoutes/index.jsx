import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Login/index";
import ForgotPass from "../ForgotPass/index";
import ResetPass from "../ResetPass/index";
import Create from "../Create/index";

import { Container, FormConatiner } from "../../../styles/Container";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

const LoginRoutes = () => {
  const { loged } = useContext(GlobalUserContext);
  if (loged) return <Navigate to="/dashboard" />;

  return (
    <Container>
      <FormConatiner>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Create />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/reset" element={<ResetPass />} />
        </Routes>
      </FormConatiner>
    </Container>
  );
};

export default LoginRoutes;
