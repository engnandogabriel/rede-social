import { useContext, useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { NavDashboardMobileStyled } from "../../../../styles/Nav/index";
import { ButtonMobile } from "../../../../styles/Button/index";

import useMedea from "../../../../hooks/useMedea/useMedea";

import { ReactComponent as Feed } from "../../../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../../assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../../assets/sair.svg";

import { GlobalUserContext } from "../../../../context/UserContext/UserContext";

const NavdashboardMobile = () => {
  const { logoutUser } = useContext(GlobalUserContext);
  const mobile = useMedea("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <ButtonMobile
          aria-label="Menu"
          className={mobileMenu && "menuMobileButtonActive"}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></ButtonMobile>
      )}
      <NavDashboardMobileStyled className={mobileMenu && "activeMenuMobile"}>
        <NavLink to="/dashboard" end activeClassName="active">
          <Feed /> Minhas Fotos
        </NavLink>
        <NavLink to="/dashboard/statistics" end activeClassName="active">
          <Estatisticas /> Estatísticas
        </NavLink>
        <NavLink to="/dashboard/post" end activeClassName="active">
          <Adicionar /> Postar Foto
        </NavLink>

        <button onClick={logoutUser}>
          <Sair /> Sair
        </button>
      </NavDashboardMobileStyled>
    </>
  );
};

export default NavdashboardMobile;
