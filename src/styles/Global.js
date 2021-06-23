import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

 body {
  background-color: #fafafa;
  -webkit-font-smooth: antialiased;
 }

 html, body, #root {
   height: 100%;
 }

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }
body, input, button {
  font-family: Roboto, sans-serif;
}
`;

export default Global;
