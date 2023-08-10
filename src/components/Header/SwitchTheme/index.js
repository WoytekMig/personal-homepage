import { ToggleBackground, Graphic, GraphicBackground, Wrapper, StyledButton, ToggleWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Wrapper >
            <StyledButton onClick={() => dispatch(toggleTheme())}>
                Dark mode {isDarkTheme ? "on" : "off"}
                <ToggleWrapper >
                    <ToggleBackground />
                    <GraphicBackground slide={isDarkTheme} />
                    <Graphic slide={isDarkTheme} />
                </ToggleWrapper>
            </StyledButton>
        </Wrapper>
    );
};