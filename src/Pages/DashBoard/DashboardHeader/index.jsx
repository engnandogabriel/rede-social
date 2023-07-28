import { useEffect, useState } from "react";

import { Title } from "../../../styles/Text/";
import { HeaderDasboard } from "../../../styles/Nav";

import useMedea from "../../../hooks/useMedea/useMedea";
import Navdashboard from "./Nav/index";
import NavdashboardMobile from "./NavMobile/index";
import { useLocation } from "react-router-dom";
const DashboaredHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  const mobile = useMedea("(max-width:40rem)");

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/dashboard":
        setTitle("Minha Conta");
        break;
      case "/dashboard/statistics":
        setTitle("Estatísticas");
        break;
      case "/dashboard/post":
        setTitle("Postagem");
    }
  }, [location]);

  if (mobile)
    return (
      <HeaderDasboard>
        <Title>{title}</Title>
        <NavdashboardMobile />
      </HeaderDasboard>
    );

  return (
    <HeaderDasboard>
      <Title>{title}</Title>
      <Navdashboard />
    </HeaderDasboard>
  );
};

export default DashboaredHeader;
