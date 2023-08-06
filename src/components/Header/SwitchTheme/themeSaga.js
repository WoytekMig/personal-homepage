import { select, call, takeEvery } from "redux-saga/effects";
import { saveThemeInlocalStorage } from "./localStorageTheme";
import { selectThemeState, toggleTheme } from "./themeSlice";

function* saveThemeSagaHandler() {
    const setTheme = yield select(selectThemeState);
    yield call(saveThemeInlocalStorage, setTheme);
}

export function* saveThemeSaga() {
    yield takeEvery(toggleTheme.type, saveThemeSagaHandler);
}