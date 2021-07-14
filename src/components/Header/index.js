import React from "react";
import styled from "styled-components";

import loupe from "../../assets/loupe.svg";
import Logo from "../../assets/Logo.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 60px;
  width: 100%;
  margin: auto;

  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  nav {
    width: 67%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 150px;
  }

  form {
    img {
      width: 19px;
    }

    input {
      width: 150px;
      height: 30px;
      ::placeholder {
        font-size: 12px;
      }
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <nav>
        <img src={Logo} alt="Buscarte logo" />

        <form>
          <img src={loupe} alt="" />
          <input type="text" placeholder="Pesquisa Buscarte" />
          <button type="submit">Pesquisar</button>
        </form>
      </nav>
    </Container>
  );
};

export default Header;
