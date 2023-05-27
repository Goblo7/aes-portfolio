import { useState, useEffect } from "react";
import { layoutStyles } from "./styles/layout.styles";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "./layout/layout.components";
import Preloader from "./components/preloader/preloader.component";
import Header from "./components/header/header.component";
import Sections from "./components/sections//section-map.component";
import Footer from "./components/footer/footer.component";

const LayoutTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: layoutStyles.mainColor,
      paper: layoutStyles.paperColor,
    },
  },
  typography: {
    fontFamily: layoutStyles.mainFontFamily,
    button: {
      fontFamily: layoutStyles.secandryFontFamily,
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      overSize: 1700,
    },
  },
});

export default function App() {
  const [preloader, setPreLoader] = useState(false);
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 4400);
  }, []);

  return (
    <ThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      {preloader ? (
        <Preloader />
      ) : (
        <Layout>
          <Header />
          <Sections />
          <Footer />
        </Layout>
      )}
    </ThemeProvider>
  );
}
