import styled from "styled-components";
// import User from "../../assets/usuario.svg";
export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;

  .login-user {
    color: #333;
    font-size: 20px;
  }
`;
export const HeaderStyle = styled.header`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
  /* position: fixed; */
  width: 100%;
  z-index: 100;
  background: rgb(255, 255, 255);
  top: 0px;
`;

export const HeaderDasboard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavDashboard = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    background: var(--background-two);
    box-shadow: rgb(255, 238, 170) 0px 0px 0px 3px;
    border-color: var(--background-one);
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: all 0.1s ease 0s;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    background: var(--background-two);
    box-shadow: rgb(255, 238, 170) 0px 0px 0px 3px;
    border-color: var(--background-one);
  }

  .active {
    background-color: #fff;
    border-color: var(--background-one);
    color: var(--color-two);
  }
  .active > svg > * {
    fill: rgb(255, 187, 17);
  }
`;
