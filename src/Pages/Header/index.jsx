import { NavStyle, HeaderStyle } from "../../styles/Nav/index";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/dogs.svg";
import { ReactComponent as User } from "../../assets/usuario.svg";

const Header = () => {
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
