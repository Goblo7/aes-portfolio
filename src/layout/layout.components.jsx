import { Grid } from "@mui/material";
import { layoutStyles } from "../styles/layout.styles";
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

export const Layout = ({ children: Children }) => {
  return (
    <ThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      <Grid position="relative">{Children}</Grid>
    </ThemeProvider>
  );
};

export default Layout;
