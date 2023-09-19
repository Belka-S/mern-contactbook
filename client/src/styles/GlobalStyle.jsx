// @import-normalize; // css import for PostCSS Normalize

// -------------- PostCSS Normalize -------------- //
import '@csstools/normalize.css';
import 'sanitize.css';

// ---------------- Global Styles ---------------- //
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

// --------------- Common Elements --------------- //
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
  background-color: #e0e2e8;
}

// -------------------- Reset -------------------- //
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

a {
  text-decoration: none;
}

button,
th,
td {
  padding: 0;
}

table {
  border-collapse: collapse;
}

// --------------- Input reset --------------- //
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
}`;
