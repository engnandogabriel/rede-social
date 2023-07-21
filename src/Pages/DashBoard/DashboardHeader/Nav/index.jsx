import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { NavDashboardStyled } from "../../../../styles/Nav";

import { ReactComponent as Feed } from "../../../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../../assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../../assets/sair.svg";

import { GlobalUserContext } from "../../../../context/UserContext/UserContext";

const Navdashboard = () => {
  const { logoutUser } = useContext(GlobalUserContext);

  return (
    <NavDashboardStyled>
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
    </NavDashboardStyled>
  );
};

export default Navdashboard;
