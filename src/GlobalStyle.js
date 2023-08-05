import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    background-color: ${({ theme }) => theme.light.primaryBackground};
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.light.primaryText};
    align-items: center;
    justify-content: center; 
}
`;

