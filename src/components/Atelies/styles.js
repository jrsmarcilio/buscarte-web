import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    main {
      margin-left: 0;
      margin-top: 30px;
    }

    aside {
      width: 100%;
    }
  }
  @media (max-width: 650px) {
    main ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const MainAtelies = styled.main`
  flex: 1;
  margin-left: 30px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;
  }
`;

export const AsideMaps = styled.aside`
  width: 320px;
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0 0.02);
  border-radius: 2px;
  padding: 30px 20px;
`;

export const Title = styled.div`
  height: 100px;
  width: 100%;
  h3 {
    font-size: 1.25rem;
    padding: 50px;
  }
`;

// import Background from "../../assets/images/MainBackground.jpg";

// export const ContainerMain = styled.div`
//   max-width: 1920px;
//   height: 1024px;
//   position: relative;
//   /* background-image: url(${Background}); */
//   // margin: 1em auto;
//   // border: 1px solid #ccc;
//   /*
//   object-fit: cover;
//   --webkit-mask-image: linear-gradient(to right, transparent 5%, black 100%);
//   mask-image: linear-gradient(to right, transparent 5%, black 100%);
//   */
// `;

// export const Container = styled.div`
//   width: 1360px;
//   height: 530px;
//   display: flex;
//   margin: 0 auto;
//   //flex-wrap: wrap;
//   justify-content: space-between;
// `;
