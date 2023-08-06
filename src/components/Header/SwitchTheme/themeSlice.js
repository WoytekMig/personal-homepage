import { createSlice } from "@reduxjs/toolkit";
import { saveThemeInlocalStorage, themeFromLocalStorage } from "./localStorageTheme";

const themeSlice = createSlice({
    name: "theme",
    initialState: themeFromLocalStorage(),
    reducers: {
        toggleTheme: (state) => {
            state.theme = !state.theme;
            saveThemeInlocalStorage(state.theme)
        },

    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectThemeState = (state) => state.theme;
export const selectTheme = (state) => selectThemeState(state).theme;
export default themeSlice.reducer;