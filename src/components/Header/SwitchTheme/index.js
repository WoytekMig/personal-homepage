import { ToggleBackground, Graphic, GraphicBackground, Wrapper, StyledButton, ToggleWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {

    const dispatch = useDispatch();
    const theme = useSelector(selectIsDarkTheme);
    console.log("theme colorButton: ", theme);

    return (
        <Wrapper >
            <StyledButton onClick={() => dispatch(toggleTheme())}>
                Dark mode {theme ? "on" : "off"}
                <ToggleWrapper >
                    <ToggleBackground />
                    <GraphicBackground slide={theme} />
                    <Graphic slide={theme} />
                </ToggleWrapper>
            </StyledButton>
        </Wrapper>
    );
};