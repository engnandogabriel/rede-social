import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/index";
import Footer from "./Pages/Footer/index";
import Home from "./Pages/home/index";
import LoginRoutes from "./Pages/Acconut/LoginRoutes/index";
import DashboardRoutes from "./Pages/DashBoard/DashboardRoutes";
import SinglePhoto from "./componets/Photo/SinglePhoto";
import UserPage from "./Pages/UserPage";
// import ProtectedRoute from "./Routes/ProtectedRoutes";
import { StorageUserContext } from "./context/UserContext/UserContext";
import { StorageDashboardContext } from "./context/DashboardContext/DashboardContext";
import NotFound from "./componets/NotFound";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <StorageUserContext>
            <StorageDashboardContext>
              <Header />
              <div className="AppBody">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login/*" element={<LoginRoutes />} />
                  <Route path="/dashboard/*" element={<DashboardRoutes />} />
                  <Route path="/foto/:id" element={<SinglePhoto />} />
                  <Route path="/perfil/:user" element={<UserPage />} />
                  <Route path="*" element={<NotFound />} />
                  {/* <ProtectedRoute
                path="dashboard/*"
                element={<DashboardRoutes />}
              /> */}
                </Routes>
              </div>
              <Footer />
            </StorageDashboardContext>
          </StorageUserContext>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
