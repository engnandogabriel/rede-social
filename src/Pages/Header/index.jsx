import { useContext } from "react";
import { NavStyle, HeaderStyle } from "../../styles/Nav/index";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/dogs.svg";
import { ReactComponent as User } from "../../assets/usuario.svg";

import { GlobalUserContext } from "../../context/UserContext/UserContext";

const Header = () => {
  const { dataUser, loged } = useContext(GlobalUserContext);

  if (loged)
    return (
      <>
        <HeaderStyle>
          <NavStyle>
            <Link to="/">
              <Logo />
            </Link>
            <div className="login-user">
              <NavLink to="/dashboard">
                {dataUser.username}
                <User />{" "}
              </NavLink>
            </div>
          </NavStyle>
        </HeaderStyle>
      </>
    );

  return (
    <>
      <HeaderStyle>
        <NavStyle>
          <Link to="/">
            <Logo />
          </Link>
          <div className="login-user">
            <Link to="/login">
              Login / Registrar <User />{" "}
            </Link>
          </div>
        </NavStyle>
      </HeaderStyle>
    </>
  );
};

export default Header;
