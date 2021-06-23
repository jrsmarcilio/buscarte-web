import styled from "styled-components";

import loupe from "../../assets/loupe.svg";

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  
  height: 76px;
  width: 100%;
  margin: auto;
  
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  nav {
    width: 67%;
    display: flex;
    justify-content: space-between;
  }

  img {
      width: 150px;
      display: flex;
      margin: auto;
      justify-content: center;
    }

    form {
      button {
        width: 70px;
        height: 30px;
        display: flex;
        margin: auto;
        justify-content: center;
        font-size: 12px;
        color: transparent;
        background: url(${loupe}) no-repeat content-box padding-box center;
      }

      input {
        width: 150px;
        height: 30px;
        ::placeholder {
          font-size: 12px;
        }
      }
    }

  @media (max-width: 800px) {
    display: flex;
    margin: auto;
    justify-content: center;

    img {
      width: 150px;
      display: flex;
      margin: auto;
      justify-content: center;
    }

    form {
      button {
        width: 60px;
        height: 30px;
        display: flex;
        margin: auto;
        justify-content: center;
        font-size: 12px;
      }

      input {
        width: 150px;
        height: 30px;
        ::placeholder {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    display: flex;
    margin: auto;
    justify-content: center;

    img {
      width: 100px;
      display: flex;
      margin: auto;
      justify-content: center;
    }

    form {
      button {
        width: 50px;
        height: 30px;
        display: flex;
        margin: auto;
        justify-content: center;
        font-size: 9px;
        color: transparent;
        background: url(${loupe}) no-repeat content-box padding-box center;
      }

      input {
        width: 90px;
        height: 30px;

        ::placeholder {
          font-size: 9px;
        }
      }
    }

    @media (max-width: 375px) {
    display: flex;
    margin: auto;
    justify-content: center;

    img {
      width: 80px;
      display: flex;
      margin: auto;
      justify-content: center;
    }

    form {
      button {
        width: 30px;
        height: 20px;
        display: flex;
        margin: auto;
        justify-content: center;
        font-size: 6px;
        color: transparent;
        background: url(${loupe}) no-repeat content-box padding-box center;
      }

      input {
        width: 70px;
        height: 20px;
        
        ::placeholder {
          font-size: 7px;
        }

        /* input {
          background-color: #000;
        } */
      }
    }
  }
`;
