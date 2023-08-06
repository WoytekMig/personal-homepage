import { all } from "redux-saga/effects";
import { saveThemeSaga } from "./Header/SwitchTheme/themeSaga";

export default function* rootSaga() {
    yield all([saveThemeSaga(),]);
}