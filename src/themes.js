const color = {
    White: "#FFFFF",
    WhiteLilac: "#FBFBFE",
    DodgerBlue: "#2188FF",
    ScienceBlue: "#0366D6",
    Mercury: "#E5E5E5",
    Iron: "#D1D5DA",
    SlateGrey: "#6E7E91",
    MineShaft: "#252525",
    Black: "black",
};

const common = {
    breakpoint: {
        mobileMax: 767,
        tabletVerticalMax: 990,
        tabletHorizontalMax: 1200,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const light = {
    ...common,

    primaryBackground: color.WhiteLilac,
    primaryText: color.SlateGrey,
    headerText: color.MineShaft,
    hireMeButton: color.ScienceBlue,
    themeToggleBackground: color.Iron,
    themeGraphicBackground: color.SlateGrey,
    themeGraphic: color.WhiteLilac,
    skillsBorderBottom: color.WhiteLilac,
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
    skillsBackground: color.SlateGrey,
};