import { ContainerDashboard } from "../../../styles/Container";
import { Route, Routes } from "react-router-dom";
import DashboaredHeader from "../DashboardHeader";
import Feed from "../../Feed";
import DashboaredPhotoPost from "../DashboardPhotoPost";
import DashboaredStatistics from "../DashboardStatistics";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";
import { useContext } from "react";

const DashboardRoutes = () => {
  const { dataUser } = useContext(GlobalUserContext);

  return (
    <ContainerDashboard>
      <DashboaredHeader />
      <Routes>
        <Route path="/" element={<Feed user={dataUser.id} />} />
        <Route path="/post" element={<DashboaredPhotoPost />} />
        <Route path="statistics" element={<DashboaredStatistics />} />
      </Routes>
    </ContainerDashboard>
  );
};

export default DashboardRoutes;
