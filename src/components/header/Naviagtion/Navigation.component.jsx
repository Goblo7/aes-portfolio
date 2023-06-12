import sectionIdEnum from "../../../scripts/section-id.script";
import {
  Button,
  IconButton,
  Stack,
  SwipeableDrawer,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import { layoutStyles } from "../../../styles/layout.styles";

const naviagtionItems = [
  {
    text: "About",
    to: sectionIdEnum.about,
  },
  {
    text: "Projects",
    to: sectionIdEnum.portofilo,
  },
  {
    text: "Contact",
    to: sectionIdEnum.contacts,
  },
];

const resumeItems = [
  {
    text: "Resume",
    to: sectionIdEnum.resume,
  },
];

const heroCV =
  "https://drive.google.com/uc?id=1I4_m4AE5eqNifEhHUi4u8aIYTh8pHwlQ&export=download";

// start styles

const buttonStyleHover = {
  color: layoutStyles.mainFontColor,
  "&:hover": {
    color: layoutStyles.mainStyleColor,
    backgroundColor: layoutStyles.paperColor,
  },
};

const buttonSpecialStyleHover = {
  color: layoutStyles.mainStyleColor,
  transition: "all .2s ease-in-out;",
  backgroundColor: layoutStyles.paperColor,
  "&:hover": {
    background: "#14233d",
  },
  "&:after,&:before": {
    content: `""`,
    position: "absolute",
    inset: "-0.05rem",
    borderRadius: "inherit",
    background: `radial-gradient(circle, rgba(18,8,126,1) 0%, rgba(136,136,255,1) 50%, rgba(26,6,56,1) 100%)`,
    animtation: `rotation 20s linear infinite`,
    zIndex: "-1",
  },
  "&:after": {
    filter: `blur(0.2rem)`,
  },
  "@keyframes rotation": {
    "0%": {
      circle: "0deg",
    },
    "100%": {
      circle: "360deg",
    },
  },
};

const openMenuIconStyle = {
  color: layoutStyles.mainStyleColor,
  fontSize: "180%",
};

const swapDrawerStyle = {
  sx: {
    width: "75%",
    backgroundColor: layoutStyles.lightMainColor,
    backgroundImage: "none",
  },
};

const toolbarStyle = {
  color: layoutStyles.mainStyleColor,
  fontSize: "250%",
};

// end styles

const resumeItem = resumeItems.map(({ text, to }) => {
  return (
    <Button
      key={to}
      href={heroCV}
      variant="outlined"
      target="_blank"
      color="inherit"
      sx={buttonSpecialStyleHover}
    >
      {text}
    </Button>
  );
});

export default function Navigation() {
  const theme = useTheme();
  const isSamll = useMediaQuery(theme.breakpoints.down("md"));

  const [navDrawer, setNavDrawer] = useState(false);
  function navDrawerTouggle() {
    setNavDrawer((prevNabDrawer) => !prevNabDrawer);
  }

  const naviagtionItem = naviagtionItems.map(({ text, to }) => {
    return (
      <Button
        key={to}
        href={`#${to}`}
        sx={buttonStyleHover}
        onClick={navDrawerTouggle}
      >
        {text}
      </Button>
    );
  });

  return (
    <Box>
      {!isSamll ? (
        <Stack direction="row" spacing={2} marginTop="0.5rem">
          {naviagtionItem}
          {resumeItem}
        </Stack>
      ) : (
        <>
          <IconButton onClick={navDrawerTouggle}>
            <MenuOpenIcon sx={openMenuIconStyle} />
          </IconButton>
          <SwipeableDrawer
            PaperProps={swapDrawerStyle}
            anchor="right"
            open={navDrawer}
            onClose={navDrawerTouggle}
            onOpen={navDrawerTouggle}
            variant="temporary"
          >
            <AppBar
              position="static"
              elevation={0}
              sx={{
                background: "none",
              }}
            >
              <Toolbar>
                <ChevronRightIcon
                  onClick={navDrawerTouggle}
                  sx={toolbarStyle}
                />
              </Toolbar>
            </AppBar>
            <Stack
              direction="column"
              spacing={7}
              width="100%"
              alignItems="center"
            >
              {naviagtionItem}
              {resumeItem}
            </Stack>
          </SwipeableDrawer>
        </>
      )}
    </Box>
  );
}
