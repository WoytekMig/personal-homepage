import { styled } from "styled-components";
/* import { ReactComponent as HireMe } from "./icon/HireMe.svg"; */

export const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    max-height: 384px;
    padding-top: 120px;

`;

export const MyPhoto = styled.img`
    border-radius: 384px;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.light.primaryText};
`;

export const Container = styled.div`
    align-items: left;
    font-style: normal;
`;

export const SubHeader = styled.h2`
    font-size: 12px;
    font-weight: 700;
    line-height: 130%; /* 15.6px */
    text-transform: uppercase;
`;

export const NameHeader = styled.header`
    font-size: 38px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 1.9px;
    color: ${({ theme }) => theme.light.headerText};
`;

export const AboutMe = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 1px;
`;