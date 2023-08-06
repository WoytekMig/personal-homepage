export const saveThemeInlocalStorage = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
};

export const themeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("theme")) || [];
