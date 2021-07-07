import styled from "styled-components";

export const Container = styled.div`
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

const Titulo = ({ title }) => (
  <Container>
    <h3>
      <span>{title}</span>
    </h3>
  </Container>
);

export default Titulo;
