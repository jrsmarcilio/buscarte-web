import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;

  background: red;

  height: 500px;
  width: 70%;
`;

export const MapsContent = styled.div`
  flex: 1 1 auto;
  background: violet;
`;

export const GridContent = styled.div`
  
  background: gray;
  height: 100%;
  width: 25px;

  position: absolute;

  margin: 20px;
`;