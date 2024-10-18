import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
    }

    body {
        background-color: #000000;
    }
`

export default GlobalStyles