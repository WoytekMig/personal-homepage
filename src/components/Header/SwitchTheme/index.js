import { ToggleBackground, Graphic, GraphicBackground, Wrapper, StyledButton, ToggleWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    return (
        <Wrapper >
            <StyledButton onClick={() => dispatch(toggleTheme())}>
                Dark mode {theme ? "off" : "on"}
                <ToggleWrapper >
                    <ToggleBackground />
                    <GraphicBackground slide={theme ? true : false} />
                    <Graphic slide={theme ? true : false} />
                </ToggleWrapper>
            </StyledButton>
        </Wrapper>
    );
};