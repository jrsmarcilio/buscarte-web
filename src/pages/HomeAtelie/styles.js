import styled from "styled-components";

export const Container = styled.div`

`;

export const StelieContent = styled.div`
  width: 1140px;
  height: 564px;

  margin-top: 45px;
  padding: 30px 15px;

  border-radius: 10px;
  background: #e9ecef;
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

export const AtelieText = styled.div`
  margin-top: 20px;

  svg {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    font-size: 16px;

    color: red;

    :hover {
      font-size: 16.5px;
      color: black;
    }
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