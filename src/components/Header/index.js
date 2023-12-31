import { HireMeButton } from "./HireMeButton";
import { ThemeButton } from "./SwitchTheme";
import photo from "./images/wm.png";
import { AboutMe, Container, HeaderWrapper, MyPhoto, NameHeader, SubHeader } from "./styled";


const Header = () => (
    <HeaderWrapper>
        <MyPhoto src={photo} alt="WojtekM"></MyPhoto>
        <Container>
            <ThemeButton />
            <SubHeader>This is</SubHeader>
            <NameHeader>Wojtek Migdał</NameHeader>
            <AboutMe> 👨‍💻💻I'm a passionate Frontend Developer fascinated especially by React.
                Currently I'm looking for a new job opportunities. </AboutMe>
            <HireMeButton />
        </Container>
    </HeaderWrapper>
);

export default Header;
