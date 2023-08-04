import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    background-color: ${({ theme }) => theme.color.WhiteLilac};
    font-family: 'Inter', sans-serif;
    align-items: center;
    justify-content: center; 
}
`;

