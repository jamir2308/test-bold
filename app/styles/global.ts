import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #__next {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, p, a, button, li, span, small, label {
    margin: 0;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  /* Input Number Spin Buttons */
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield; /* Firefox */
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #cccccc;
  }

  .MuiFormControlLabel-label {
    color: #121E6C;
    font-size: 16px;
  }

  /* Firefox specific scrollbar styling */
  @-moz-document url-prefix() {
    ::-moz-scrollbar {
      width: 0px;
    }
    ::-moz-scrollbar-track {
      background: transparent;
    }
    ::-moz-scrollbar-thumb {
      border-radius: 4px;
    }
    ::-moz-scrollbar-thumb:hover {
      background: #cccccc;
    }
  }

  /* Safari specific adjustments */
  @media not all and (min-resolution:.001dpcm) { @supports (-webkit-appearance:none) {
    body {
      overscroll-behavior: none;
    }
  }}

  /* Edge specific adjustments */
  @supports (-ms-ime-align:auto) {
    body {
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
  }
`;
