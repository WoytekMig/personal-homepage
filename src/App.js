import { ThemeProvider } from "styled-components";
import { light, dark } from "./themes";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./components/Header/SwitchTheme/themeSlice";
import Header from "./components/Header";
import logo from "./logo.svg";
import { Main } from "./styled";
import SkillsContainer from "./components/Skills/index";
import { futureSkills, skills } from "./components/Skills/skillsList";

function App() {
  const wchichTheme = useSelector(selectIsDarkTheme);
  /*   console.log("wchichTheme =", wchichTheme); */
  return (
    <>
      <ThemeProvider theme={wchichTheme ? dark : light}>
        <GlobalStyle />

        <Main>
          <Header />
          <SkillsContainer
            header={"My skillset includes 🛠️"}
            content={skills}
          />
          <SkillsContainer
            header={"What I want to learn next 🚀"}
            content={futureSkills}
          />

          <img src={logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a>Learn React</a>

          {/*  </SkillsContainer>  */}
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
