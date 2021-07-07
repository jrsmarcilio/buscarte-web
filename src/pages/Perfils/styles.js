import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;

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

export const ContentChildren = styled.div`
  width: 67vw;
  height: 70vh;
  margin-top: 30px;
  background: #eee;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
