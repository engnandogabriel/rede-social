import { useContext } from "react";
import { NavStyle, HeaderStyle } from "../../styles/Nav/index";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/dogs.svg";
import { ReactComponent as User } from "../../assets/usuario.svg";
import { ReactComponent as Logout } from "../../assets/sair.svg";

import { GlobalUserContext } from "../../context/UserContext/UserContext";

const Header = () => {
  const { dataUser, loged, logoutUser } = useContext(GlobalUserContext);

  if (loged)
    return (
      <>
        <HeaderStyle>
          <NavStyle>
            <Link to="/">
              <Logo />
            </Link>
            <div className="login-user">
              <Link onClick={() => logoutUser()}>
                {dataUser.username}
                <Logout />{" "}
              </Link>
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
