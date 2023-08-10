export const saveThemeInlocalStorage = (theme) => {
    localStorage.setItem("isDarkTheme", JSON.stringify(theme));
    console.log(theme);
};

export const themeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("isDarkTheme")) || [false];
