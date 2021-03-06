import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-family: Poly;
    font-size: 36px;
    line-height: 43px;

    text-align: center;

    color: #333333;

    span {
      display: inline-block;
      border-bottom: 1px solid #0052cc;
      padding-bottom: 2px;
    }
  }
`;

export const FilterContent = styled.div`
  width: 45%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  button {
    padding: 9px;
    font-size: 18px;
    cursor: pointer;

    background: transparent;
    border: none;
    text-decoration: none;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;

    :hover {
      font-weight: bold;
      color: #0052cc;
    }

    :focus {
      font-weight: bold;
      color: rgb(0, 82, 204);

      border-bottom: 1px solid #0052cc;
      font-size: 18px;
      font-family: Poly;
    }
  }
`;

export const ArtistaContent = styled.div`
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.3);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  width: 69vw;
  height: 75vh;

  position: relative;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  margin-top: 20px;
  padding: 30px;

  background: #eee;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;


  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ArtistItem = styled.div`
  width: 240px;
  height: 240px;

  margin: 5px;

  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

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

  aside {
    display: flex;
    flex-flow: column wrap;
  }

  :hover {
    background: #E1EDFF;
    cursor: pointer;
    border: 1px solid #0052cc;
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
