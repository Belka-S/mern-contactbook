import 'modern-normalize';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* Style */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.5;
  color: #000000;
  background-color: #cfdae5;

  padding-left: 20px;
  padding-right: 20px;
   @media screen and (min-width: 320px) {
    // max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // max-width: 700px;
    padding-left: 64px;
    padding-right: 64px;
  }
  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Reset */
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
ol,
pre {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button,
th,
td {
  padding: 0;
}

table {
  border-collapse: collapse;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid rgb(0, 0, 0);
  -webkit-text-fill-color: rgb(0, 0, 0);
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
  transition: background-color 5000s ease-in-out 0s;
}
`;
