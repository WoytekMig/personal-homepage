import { createSlice } from "@reduxjs/toolkit";
import { saveThemeInlocalStorage, themeFromLocalStorage } from "./localStorageTheme";

const themeSlice = createSlice({
    name: "theme",
    initialState: { isDarkTheme: themeFromLocalStorage(), }, /* themeFromLocalStorage() */
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
            saveThemeInlocalStorage(state.isDarkTheme);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectThemeState = (state) => state.theme;
export const selectIsDarkTheme = (state) => selectThemeState(state).isDarkTheme;
export default themeSlice.reducer;