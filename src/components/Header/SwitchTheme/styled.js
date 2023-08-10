import styled, { css } from "styled-components";
import { ReactComponent as graphicSun } from "./icon/image.svg";
import { ReactComponent as buttonBckgrd } from "./icon/bg.svg";
import { ReactComponent as graphicBckgrd } from "./icon/toggle.svg";

export const Wrapper = styled.div`
    height: 26px;
    display: flex;
    justify-content: flex-end; 
    padding-right: 17px;
    gap: 12px;
`;

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center; 
    gap: 12px;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    outline-offset: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
    }
`;

export const ToggleWrapper = styled.div`
        color: ${({ theme }) => theme.themeToggleBackground}; 
`;

export const ToggleBackground = styled(buttonBckgrd)`
    z-index: -1;
    position: absolute; 
    color: ${({ theme }) => theme.themeToggleBackground}; 
  
`;

export const GraphicBackground = styled(graphicBckgrd)`
    color: ${({ theme }) => theme.themeGraphicBackground}; 
    stroke-width: 1px;
    padding: 4px;
    z-index: 0;
    position: absolute;
    transition: 0.3s;
    ${({ slide }) =>
        slide &&
        css`
      transform: translateX(20px);
    `};
`;

export const Graphic = styled(graphicSun)`
   color: ${({ theme }) => theme.themeGraphic};   
   stroke-width: 0.02px;
   padding: 7px;
   z-index: 1;
   position: absolute;
   position: relative; 
   transition: 0.3s;
   ${({ slide }) =>
        slide &&
        css`
      transform: translateX(20px);
    `};
`;
