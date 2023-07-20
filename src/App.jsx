import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/index";
import Footer from "./Pages/Footer/index";
import Home from "./Pages/home/index";
import LoginRoutes from "./Pages/Acconut/LoginRoutes/index";

import { StorageUserContext } from "./context/UserContext/UserContext";

const App = () => {
  return (
    <>
      <StorageUserContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<LoginRoutes />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StorageUserContext>
    </>
  );
};

export default App;
