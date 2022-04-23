import React from "react";
import Footer from "components/Footer";
import View from "components/View";
import { ThemeProvider } from "styled-components";
import themes from "theme";
import GlobalStyles from "theme/Global";
import ScrollToTopButton from "components/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <View />
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
