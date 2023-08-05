import { styled } from "styled-components";
import { ReactComponent as graphicSun } from "./icon/image.svg";
import { ReactComponent as buttonBckgrd } from "./icon/bg.svg";
import { ReactComponent as graphicBckgrd } from "./icon/toggle.svg";

export const Wrapper = styled.div`
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: right; 
    padding-right: 17px;
`;

export const ButtonBackground = styled(buttonBckgrd)`
    background-color: ${({ theme }) => theme.light.primaryBackground};
    fill: ${({ theme }) => theme.light.themeButtonBackground};
    z-index: -1;
    position: absolute;
    stroke-width: 1px;
`;

export const GraphicBackground = styled(graphicBckgrd)`
    fill: ${({ theme }) => theme.light.themeGraphicBackground};
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.light.themeGraphicBackground};
    padding: 4px;
    z-index: 0;
    position: absolute;
`;

export const Graphic = styled(graphicSun)`
   fill: none; 
   stroke: ${({ theme }) => theme.light.themeGraphic};   
   stroke-width: 0.8px;
   padding: 7px;
   z-index: 1;
   position: absolute;
`;