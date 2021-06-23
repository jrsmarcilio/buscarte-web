import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(6, minmax(auto, 13em)) 1fr;
  grid-template-rows: minmax(1em, auto) 1fr auto minmax(1em, auto);
`;

export const MapsContent = styled.div`
  grid-column: 2/6;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const AtelieContent = styled.div`
  background: #fff;
  grid-column: 6/8;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const AtelieItem = styled.li`
  list-style: none;

  hr {
    color: #999;
  }

  .atelie-item {
    box-shadow: 0 0 14px 0 rgba(0, 0, 0 0.02);
    border-radius: 2px;
    margin: 10px -10px;
    flex-direction: column;

    :hover {
      cursor: pointer;
    }

    header {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    header img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    .null-photo {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #fafafa;
    }

    header .atelie-info {
      margin-left: 20px;
    }

    p {
      color: #666;
      font-size: 14px;
      line-height: 20px;
    }
    a {
      color: #7d5ba6;
      font-size: 14px;
      text-decoration: none;
    }

    a:hover {
      color: #4f3077;
      margin: 6px;
      padding-bottom: 6px;
    }
  }

  .atelie-info strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  .atelie-info span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
