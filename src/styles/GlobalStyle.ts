import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;

        
    }

    body {
        overflow-x: hidden;

        &::-webkit-scrollbar{
            background-color: #1d1d1d;
            width: 10px;
            /* border-top-right-radius: 5px; */

            
        }

        &::-webkit-scrollbar-thumb {
                background-color: #A02929;
                border-radius: 5px;
                width: 10px;
            }
    }

    ul, li {
        list-style: none;
    }

    :root {
        --red: #A02929;
        --white: #E6E6E6;

        --color1: #2B2B30;
        --color2: #1F1F23;
        --color3: #515151;
    }

`