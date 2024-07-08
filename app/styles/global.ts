import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html, body {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #__next {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a,
    button, li, a, span, small, label {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
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
`;
