import styled from "styled-components";

import GoLocation from "./Containers/GoLocation";

export const Container = styled.div`
  margin-top: 45px;

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

export const Content = styled.div`
  width: 70%;

  display: flex;
  justify-content: space-between;
  margin: 38px auto;
`;

export const MapsContent = styled.div`
  width: 740px;
  height: 450px;

  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const AtelieContent = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  width: 550px;
  height: 450px;

  background: #eee;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const AtelieItem = styled.div`
  width: 100%;
  height: 130px;

  margin: 10px 10px 0 10px;
  padding-left: 20px;

  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  .btn-atelie {
    z-index: +5;
  }

  .text-holder {
    width: 270px;
    padding: 20px;

    aside {
      font-size: 18px;
    }

    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
  }

  .img-holder {
    width: 90px;
    height: 90px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border: 4px solid #eeeeee;
      position: absolute;
      width: 100px;
      height: auto;
    }
  }

  a {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    background: #5786b6;
    width: 130px;
    height: 30px;

    border-radius: 8px 0 0 8px;
    color: #fff;

    font-size: 14px;
    font-weight: bold;

    :hover {
      cursor: pointer;
      background: #225986;
    }
  }

  :hover {
    background: #e1edff;
    cursor: url('data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>'),
      auto;
    border: 1px solid #0052cc;
  }
`;

export const FotoNull = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: #919191;
  border: 4px solid #eeeeee;
`;
