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
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgb(255, 255, 255);
  top: 0px;
`;
