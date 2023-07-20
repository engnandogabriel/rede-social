import { ContainerDashboard } from "../../../styles/Container";
import { Route, Routes } from "react-router-dom";
import DashboaredHeader from "../DashboardHeader";
import Feed from "../../Feed";
import DashboaredPhotoPost from "../DashboardPhotoPost";
import DashboaredStatistics from "../DashboardStatistics";

const DashboardRoutes = () => {
  return (
    <ContainerDashboard>
      <DashboaredHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<DashboaredPhotoPost />} />
        <Route path="statistics" element={<DashboaredStatistics />} />
      </Routes>
    </ContainerDashboard>
  );
};

export default DashboardRoutes;
