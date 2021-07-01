import styled from "styled-components";

// import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(6, minmax(auto, 13em)) 1fr;
  grid-template-rows: minmax(20em, auto) 1fr auto minmax(20em, auto);

  background: #fafafa;
  margin-top: 60px;

  flex-wrap: nowrap;
`;

export const ArtistaContent = styled.div`
  background: blue;
  height: 450px;

  grid-column: 2/6;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const FilterContent = styled.div`
  background: #fff;
  grid-column: 6/8;

  button {
    padding: 5px;
  }
  
  div {
    margin-bottom: 10px;
    display: flex;
  }


  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;