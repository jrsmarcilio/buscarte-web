import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 840px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArtistsContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  margin-top: 30px;
  padding: 30px;
  width: 80%;
  height: 90%;

  background: #eee;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const ArtistItem = styled.div`
  width: 180px;
  height: 180px;

  margin: 5px;

  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  img {
    width: 90px;
    height: auto;
    border-radius: 50%;
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
