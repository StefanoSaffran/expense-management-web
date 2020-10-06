import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  #root, body {
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  body, input, button {
    font: 1.6rem Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  input::placeholder, textarea::placeholder {
    color: var(--placeholder);
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;
