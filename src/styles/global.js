import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin:0;
        padding:0;
        outline: none;
    }

    body , input , button{
        font: 14px Roboto, sans-serif;
    }

    h1 {
        color: #1b1b1b;
        text-shadow: 1.3px 1px 1px #1480fb;
    }

    button{
        cursor: pointer;
    }

    #main-container{
        max-width:1200px;
        margin: 0 auto;

        @media only screen and (max-width: 767px) {padding: 0;}
    }
`;