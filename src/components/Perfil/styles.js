import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Apresentacao = styled.div`
  width: 30%;
  height: 85%;
  margin: 20px;

  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-flow: row wrap;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const MapsContent = styled.div`
  width: 60%;
  height: 85%;

  margin: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const AtelieItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  .info-img-nome {
    justify-content: center;
    align-items: center;
  }

  .img-holder {
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      width: 150px;
      height: auto;
    }
  }

  h3 {
    text-align: center;

    margin-top: 10px;
    font-size: 28px;
  }

  aside {
    display: flex;
    flex-flow: column wrap;
  }
`;

export const ArtistaItem = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;

  .img-holder {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      width: 150px;
      height: auto;
    }
  }

  h3 {
    text-align: center;

    margin-top: 10px;
    font-size: 28px;
  }

  aside {
    display: flex;
    flex-flow: column wrap;
  }

  .aside-ArtItem {
    span {
      margin-top: 15px;
    }
  }
`;

export const FotoNull = styled.div`
  margin-left: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #919191;
  border: 4px solid #eeeeee;
`;

export const AsideActive = styled.aside`
  display: inline-block;
  border-bottom: 1.5px solid #0052cc;
  padding: 2px;
  font-size: 18px;

  font-family: Poly;
`;

export const ArtistaContent = styled.div`
  width: 60%;
  height: 85%;

  margin: 20px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  background: #fff;
  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  aside {
    width: 90%;
    padding: 30px;
    margin: 0 auto;
  }
  span {
    font-size: 21px;
    padding: 30px;
  }
`;

/**
 * Novo Layout
 */

export const ArtistaContainer = styled.div`
  width: 67vw;
  height: 70vh;

  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */

  font-family: Poly;
  font-style: normal;
  font-weight: normal;

  aside {
    width: 38.7vh;
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .perfil-content {
      width: 100%;
      height: 39vh;

      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }

    .img-holder {
      margin-top: 25px;
      width: 200px;
      height: 200px;
      position: relative;
      overflow: hidden;
      border-radius: 100%;
      border: 4px solid #225986;

      img {
        position: absolute;
        width: 250px;
        height: auto;
      }
    }

    .nome-holder {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: center;

      span {
        font-size: 21px;
        color: #225986;
      }

      strong {
        width: 240px;
        margin-top: 5px;
        font-size: 26px;
        color: #225986;
      }
    }

    .divider-hr {
      width: 200px;
      height: 2px;

      background: #bdbdbd;
    }

    .perfil-links {
      width: 100%;
      height: 31vh;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: start;
      flex-direction: column;

      padding: 20px 50px;

      a {
        text-decoration: none;
        font-size: 21px;
        color: #225986;
        padding: 8px 20px;
        margin-top: 5px;

        :hover {
          background: #e1edff;
          cursor: pointer;
          border: 1px solid #0052cc;
          border-radius: 4px;
        }
      }

      svg {
        margin-right: 10px;
        color: #225986;
        font-size: 26px;
      }
    }
  }

  article {
    width: 920px;
    height: 100%;

    .sobre-content {
      width: 100%;
      height: 37vh;

      display: flex;
      flex-wrap: wrap;

      padding: 50px;

      h3 {
        font-size: 36px;
        color: #0a223d;
      }
      span {
        color: #0a223d;
        font-size: 24px;
        padding: -50px;
      }
    }

    .infor-content {
      /* width: 100%; */
      height: 33vh;

      padding-left: 50px;

      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .titulo-items {
        justify-content: flex-start;

        span {
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 18px;
        }
      }

      .infor-items {
        justify-content: flex-start;
        span {
          margin-bottom: 20px;
          font-size: 18px;
        }
      }

      .info-end {
        width: 300px;
        flex-wrap: wrap;
      }
    }
  }
`;
