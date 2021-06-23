import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 body {
  background-color: #e5e6f0;
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
