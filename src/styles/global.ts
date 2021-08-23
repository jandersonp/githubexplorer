import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F0F5;
    --green: #04D361;
    --shape: #FFF;

    --text-title: #3A3A3A;
    --text-body: #A8A8B3;

    --text-description: #3D3D4D;
    --arrow: #cbcbd6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  body {
    background:  var(--background) url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


  
`;
