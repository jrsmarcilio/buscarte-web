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
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

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
