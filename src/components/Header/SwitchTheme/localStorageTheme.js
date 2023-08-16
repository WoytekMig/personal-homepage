export const saveThemeInlocalStorage = (isTheme) => {
    localStorage.setItem("theme", JSON.stringify(isTheme));
    console.log("local storage? : ", isTheme);
};

export const themeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("theme")) || false;