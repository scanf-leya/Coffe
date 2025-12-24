import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/theme/default";
import { GlobalStyle } from "./style/global";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
