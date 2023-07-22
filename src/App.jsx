import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/index";
import Footer from "./Pages/Footer/index";
import Home from "./Pages/home/index";
import LoginRoutes from "./Pages/Acconut/LoginRoutes/index";
import DashboardRoutes from "./Pages/DashBoard/DashboardRoutes";
// import ProtectedRoute from "./Routes/ProtectedRoutes";
import { StorageUserContext } from "./context/UserContext/UserContext";
import { StorageDashboardContext } from "./context/DashboardContext/DashboardContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StorageUserContext>
          <StorageDashboardContext>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<LoginRoutes />} />
              <Route path="dashboard/*" element={<DashboardRoutes />} />
            </Routes>
            <Footer />
          </StorageDashboardContext>
        </StorageUserContext>
      </BrowserRouter>
    </>
  );
};

export default App;
