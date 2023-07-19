import { Nav } from "../../styles/Nav/index";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/dogs.svg";
import { ReactComponent as User } from "../../assets/usuario.svg";

const Header = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <Logo />
        </Link>
        <div className="login-user">
          <Link to="/login">
            Login / Registrar <User />{" "}
          </Link>
        </div>
      </Nav>
    </>
  );
};

export default Header;
