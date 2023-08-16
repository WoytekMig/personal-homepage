import { createSlice } from "@reduxjs/toolkit";
import { saveThemeInlocalStorage, themeFromLocalStorage } from "./localStorageTheme";

const themeSlice = createSlice({
    name: "theme",
    initialState: themeFromLocalStorage(),
    reducers: {
        toggleTheme: (state) => {
            state.isTheme = !state.isTheme;
            saveThemeInlocalStorage(state.isTheme);
        },
    },
});

export const selectThemeState = (state) => state.theme;
export const { toggleTheme } = themeSlice.actions;
export const selectIsDarkTheme = (state) => selectThemeState(state).isTheme;
export default themeSlice.reducer;