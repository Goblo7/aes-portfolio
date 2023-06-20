import { Grid } from "@mui/material";
import { layoutStyles } from "../../scripts/styles.script";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

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

const Layout = (props) => {
  return (
    <ThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      <Grid position="relative">{props.children}</Grid>
    </ThemeProvider>
  );
};

export default Layout;
