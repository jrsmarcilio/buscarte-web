import styled from "styled-components";

// import styled from "styled-components";

export const Container = styled.div`
  margin-top: 45px;

  h3 {
    /* position: relative; */
    font-family: Poly;
    font-size: 36px;
    line-height: 43px;

    text-align: center;

    color: #333333;

    span {
      display: inline-block;
      border-bottom: 1px solid red;
      padding-bottom: 2px;
    }
  }
`;

export const FilterContent = styled.div`
  margin-top: 45px;
  
  display: flex;
  justify-content: space-between;
  padding: 40;

`;

export const ArtistaContent = styled.div`
  display: flex;
  margin: 35px auto;
  justify-content: center;
  align-items: center;
  
  height: 750px;

`;

export const RoundedCircle = styled.div`
    padding: 10px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    border: 6px solid #eeeeee;
  }
`;

export const FotoNull = styled.div`
    margin-left: 15px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #919191;
    border: 6px solid #eeeeee;
`;

export const ArtistaText = styled.div`
  margin-top: 20px;
  text-align: center;

  span {
    font-size: 16px;

    color: red;

    :hover {
      font-size: 16.5px;
      color: black;
    }
  }

`;