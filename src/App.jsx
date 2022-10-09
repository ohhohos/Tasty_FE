import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoadingSpinner from "./components/common/LoadingSpinner";

import RouterConfig from "./RouterConfig";
import ScrollToTop from "./ScrollToTop";
import GlobalStyle from "./styles/GlobalStyled";
import theme from "./styles/theme";

const App = ()=> {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner primary />}>
		      <RouterConfig />

		    </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
