import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

*{
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    -webkit-tap-highlight-color: transparent;
}

body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-width: 450px;
    padding: 70px 20px 60px;
    }

input, textarea, button, select, link {
    font-size: 1em;
    color: black;
}

h1, h2 {
    margin: 0;
}

`
