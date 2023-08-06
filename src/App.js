import { ThemeProvider } from 'styled-components';
import { light, dark } from './themes';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { selectTheme } from "./components/Header/SwitchTheme/themeSlice"
import Header from './components/Header';
import logo from './logo.svg';
import { Main } from './styled';

function App() {
  const wchichTheme = useSelector(selectTheme);
  return (

    <ThemeProvider theme={wchichTheme ? light : dark}>
      <GlobalStyle />

      <Main>
        <Header />

        <img src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>


      </Main>

    </ThemeProvider>

  );
}

export default App;
