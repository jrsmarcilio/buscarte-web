import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(6, minmax(auto, 13em)) 1fr;
  grid-template-rows: minmax(8em, auto) 1fr auto minmax(8em, auto);

  margin-top: -30px;
  background: #293241;
  position: relative;

  h2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    width: 70%;
    color: #eef1ef;
    text-align: center;
    font-weight: 600;
    line-height: 1.5;
    transform: translate(-50%, -50%);
  }
`;
