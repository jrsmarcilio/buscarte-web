import styled from "styled-components";

export const AtelieContainer = styled.div`
  width: 655px;
  border-radius: 5px;
`;

export const AtelieGroup = styled.div`
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  overflow: auto;
  border-radius: 5px;
  padding: 0px 15px;

`;

export const AtelieItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #ccc;


  :hover {
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .loco {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    padding: 5px 0px;
  }
`;

export const Thumbnail = styled.div`
  padding: 0px 10px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 auto;
    width: 60px;
    border-radius: 50%;
  }
`;

export const Details = styled.div`
  width: 300px;
  display: flex;
  color: #111;
  margin: 10px 0 0 -10px;

  h2 {
    font-size: 16px;
    color: #111;
  }
  span,
  a {
    color: #555;
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #959;
  }

  ul {
    list-style-type: none;
  }
`;

/*
  .list-group .list-group-item .details {
  flex:1;
}
.list-group .list-group-item .details h2 {
  font-size:16px;
  color:#111;
  padding:0px 5px 3px;
}
.list-group .list-group-item .details p {
  color:#555;
  font-size:14px;
  padding:0px 7px;
}
*/
