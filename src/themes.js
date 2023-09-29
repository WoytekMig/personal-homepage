import styled from "styled-components";

const color = {
  White: "#FFFFFF",
  WhiteLilac: "#FBFBFE",
  DodgerBlue: "#2188FF",
  ScienceBlue: "#0366D6",
  Mercury: "#E5E5E5",
  Iron: "#D1D5DA",
  IronLight: "rgba(209, 213, 218, 0.30)",
  SlateGrey: "#6E7E91",
  SlateGreyLight: "rgba(54, 54, 54, 0.72)",
  MineShaft: "#252525",
  Black: "black",
};

const common = {
  breakpoint: {
    mobileMax: 767,
    tabletVerticalMax: 990,
    tabletHorizontalMax: 1200,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const light = {
  ...common,

  primaryBackground: color.WhiteLilac,
  headerText: color.MineShaft,
  primaryText: color.SlateGrey,
  hireMeButton: color.ScienceBlue,
  themeToggleBackground: color.Iron,
  themeGraphicBackground: color.SlateGrey,
  themeGraphic: color.WhiteLilac,
  skillsBorderBottom: color.IronLight,
  skillsBackground: color.White,
};

export const dark = {
  ...common,

  primaryBackground: color.MineShaft,
  primaryText: color.WhiteLilac,
  headerText: color.WhiteLilac,
  hireMeButton: color.DodgerBlue,
  themeToggleBackground: color.MineShaft,
  themeGraphicBackground: color.WhiteLilac,
  themeGraphic: color.Black,
  skillsBorderBottom: color.Iron,
  skillsBackground: color.SlateGreyLight,
};

export const StyledHeader = styled.header`
  font-size: 30px;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.headerText};
`;

export const StyledContent = styled.article`
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9;
  color: ${({ theme }) => theme.primaryText};
`;
