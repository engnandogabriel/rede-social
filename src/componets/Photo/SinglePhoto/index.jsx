import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

const SinglePhoto = () => {
  const { dataPhoto } = useContext(GlobalDashboardContext);
  const { id } = useParams();

  useEffect(() => {}, []);

  console.log(id);

  return <div>Photo</div>;
};
export default SinglePhoto;
