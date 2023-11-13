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
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";

function App() {
  const wchichTheme = useSelector(selectIsDarkTheme);

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

          <Portfolio header={"Portfolio"} subHeader={"My recent projects"} />

          <img src={logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a>Learn React</a>
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
