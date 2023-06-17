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
import Wrapper from "../../Helper/Wrapper.component";

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

const resumeItems = [
  {
    text: "Resume",
    id: sectionIdEnum.resume,
  },
];

const heroCV =
  "https://drive.google.com/uc?id=1hbU_RTkq_sV0NoHM9_AT7U2LRJwLyLtu&export=download";

const resumeItem = resumeItems.map((resume) => {
  return (
    <Button
      key={resume.id}
      href={heroCV}
      variant="outlined"
      target="_top"
      color="inherit"
      sx={buttonSpecialStyleHover}
    >
      {resume.text}
    </Button>
  );
});

const Navigation = () => {
  const theme = useTheme();
  const isSamll = useMediaQuery(theme.breakpoints.down("md"));
  const [navDrawer, setNavDrawer] = useState(false);

  const naviagtionItems = [
    {
      text: "About",
      id: sectionIdEnum.about,
    },
    {
      text: "Projects",
      id: sectionIdEnum.portofilo,
    },
    {
      text: "Contact",
      id: sectionIdEnum.contacts,
    },
  ];

  const navDrawerTouggle = () => {
    setNavDrawer((prevNabDrawer) => !prevNabDrawer);
  };

  const naviagtionItem = naviagtionItems.map((nav) => {
    return (
      <Button
        key={nav.id}
        onClick={() => {
          setTimeout(() => {
            document
              .querySelector(`#${nav.id}`)
              .scrollIntoView({ behavior: "smooth" });
          }, 3);
          navDrawerTouggle();
        }}
        sx={buttonStyleHover}
      >
        {nav.text}
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
        <Wrapper>
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
        </Wrapper>
      )}
    </Box>
  );
};

export default Navigation;
