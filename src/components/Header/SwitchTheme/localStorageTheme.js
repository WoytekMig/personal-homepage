export const saveThemeInlocalStorage = (isDarkTheme) => {
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
    console.log(isDarkTheme);
};

export const themeFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("isDarkTheme"));
};

