import { createGlobalStyle } from "styled-components";

const AppRoot = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    font-family: 'Roboto' !important;
    text-align: left;
	cursor: default;
	font-weight: 300;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	font-size: 18px;
	height: 100vh;
    text-rendering: optimizeLegibility;
  }
`;

export default AppRoot;
