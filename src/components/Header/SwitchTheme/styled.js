import { styled } from "styled-components";
import { ReactComponent as graphicSun } from "./icon/image.svg";
import { ReactComponent as buttonBckgrd } from "./icon/bg.svg";
import { ReactComponent as graphicBckgrd } from "./icon/toggle.svg";

export const Wrapper = styled.div`
    height: 26px;
    display: flex;
    justify-content: right; 
    padding-right: 17px;
`;

export const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    border: none;
    background-color: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.primaryText}; 

`;

export const ToggleWrapper = styled.div`
        align-items: center;
        justify-content: center;
`;

export const ToggleBackground = styled(buttonBckgrd)`
    background-color: ${({ theme }) => theme.primaryBackground};
    fill: ${({ theme }) => theme.themeButtonBackground};
    z-index: -1;
    position: absolute;
    stroke-width: 1px;
`;

export const GraphicBackground = styled(graphicBckgrd)`
    fill: ${({ theme }) => theme.themeGraphicBackground};
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.themeGraphicBackground};
    padding: 4px;
    z-index: 0;
    position: absolute;
`;

export const Graphic = styled(graphicSun)`
   fill: none; 
   stroke: ${({ theme }) => theme.themeGraphic};   
   stroke-width: 0.8px;
   padding: 7px;
   z-index: 1;
   position: absolute;
`;