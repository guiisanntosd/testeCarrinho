import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #F2F3F5;
    --blue: #3C78F2;
    --gray: #A7A7A7;
    --white: #FFFFFF;
    --text: #1A1A1A;
    --shadow: 0 0 20px #D2D2D2;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    height: 100vh;
    position: relative;
  }

  body, button { 
    font: 300 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;