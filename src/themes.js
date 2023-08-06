const color = {
    White: "#FFFFF",
    WhiteLilac: "#FBFBFE",
    DodgerBlue: "#2188FF",
    ScienceBlue: "#0366D6",
    Mercury: "#E5E5E5",
    SlateGrey: "#6E7E91",
    MineShaft: "#252525",
    Black: "black",
};

const breakpoints = {
    breakpoint: {
        mobileMax: 767,
    },
}

export const light = {
    ...breakpoints,

    primaryBackground: color.WhiteLilac,
    primaryText: color.SlateGrey,
    headerText: color.MineShaft,
    hireMeButton: color.ScienceBlue,
    themeButtonBackground: color.Mercury,
    themeGraphicBackground: color.SlateGrey,
    themeGraphic: color.White,
};

export const dark = {
    ...breakpoints,
    primaryBackground: color.Black,
    primaryText: color.Black,
    headerText: color.Black,
    hireMeButton: color.Black,
    themeButtonBackground: color.Black,
    themeGraphicBackground: color.Black,
    themeGraphic: color.Black,
};