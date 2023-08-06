import { theme } from "../../../themes";
import { ToggleBackground, Graphic, GraphicBackground, Wrapper, StyledButton, ToggleWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    return (
        <Wrapper onClick={() => dispatch(toggleTheme())}>
            <StyledButton> Dark mode {theme ? "on" : "off"} </StyledButton>
            <ToggleWrapper>
                <ToggleBackground />
                <GraphicBackground />
                <Graphic />
            </ToggleWrapper>
        </Wrapper>
    );
};