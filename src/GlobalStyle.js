import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    background-color: ${({ theme }) => theme.primaryBackground};
    transition: background 0.3s;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.primaryText};
    align-items: center;
    justify-content: center; 
    word-break: break-word;
}
`;

