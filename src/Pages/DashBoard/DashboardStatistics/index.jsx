import { lazy, useContext, useEffect, useState } from "react";
import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";
import LoadGlobal from "../../../componets/LoadGlobal";
import React from "react";
// import Graphic from "../../../componets/Graphic";
const Graphic = lazy(() => import('../../../componets/Graphic'))

const DashboaredStatistics = () => {
  const { loadGlobal, getStatics } = useContext(GlobalDashboardContext);
  const [statics, setStatics] = useState([])
  useEffect(() => {
    async function statics(){
      const data = await getStatics();
      setStatics(data)

    }
    statics()
  }, []);

  console.log(statics)

  if (loadGlobal) return <LoadGlobal />;
  if(statics) return <React.Suspense fallback={<div></div>}><Graphic data={statics}/></React.Suspense>;
  return null
};

export default DashboaredStatistics;
