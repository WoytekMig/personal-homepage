import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    background-color: ${({ theme }) => theme.primaryBackground};
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.primaryText};
    align-items: center;
    justify-content: center; 
}
`;

