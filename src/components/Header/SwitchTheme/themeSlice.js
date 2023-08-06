import { createSlice } from "@reduxjs/toolkit";
import { saveThemeInlocalStorage, themeFromLocalStorage } from "./localStorageTheme";

const themeSlice = createSlice({
    name: "theme",
    initialState: { lightTheme: themeFromLocalStorage() },
    reducers: {
        toggleTheme: (state) => {
            state.lightTheme = !state.lightTheme;
            saveThemeInlocalStorage(state.lightTheme)
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectThemeState = (state) => state.theme;
export const selectTheme = (state) => selectThemeState(state).lightTheme;
export default themeSlice.reducer;