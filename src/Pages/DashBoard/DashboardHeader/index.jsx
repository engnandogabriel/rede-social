import { NavLink, useLocation } from "react-router-dom";
import { HeaderDasboard, NavDashboard } from "../../../styles/Nav";
import { Title } from "../../../styles/Text";
import { ButtonMobile } from "../../../styles/Button";

import { ReactComponent as Feed } from "../../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../assets/sair.svg";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";
import { useContext, useEffect, useState } from "react";
import useMedea from "../../../hooks/useMedea/useMedea";

const DashboaredHeader = () => {
  const { logoutUser } = useContext(GlobalUserContext);
  const [title, setTitle] = useState("");
  const location = useLocation();

  const mobile = useMedea("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

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

  return (
    <HeaderDasboard>
      <Title>{title}</Title>

      <NavDashboard>
        <NavLink to="/dashboard" end activeClassName="active">
          <Feed />
        </NavLink>
        <NavLink to="/dashboard/statistics" end activeClassName="active">
          <Estatisticas />
        </NavLink>
        <NavLink to="/dashboard/post" end activeClassName="active">
          <Adicionar />
        </NavLink>

        <button onClick={logoutUser}>
          <Sair />
        </button>
        {mobile && (
          <ButtonMobile
            aria-label="Menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          ></ButtonMobile>
        )}
      </NavDashboard>
    </HeaderDasboard>
  );
};

export default DashboaredHeader;
