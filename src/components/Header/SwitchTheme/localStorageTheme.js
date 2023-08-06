export const saveThemeInlocalStorage = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
};

export const themeFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("theme"));
};