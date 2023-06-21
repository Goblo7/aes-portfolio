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
import { navigationStyles } from "../../../scripts/styles.script";
import Wrapper from "../../Helper/Wrapper.component";

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

const heroCV =
  "https://drive.google.com/uc?id=1hbU_RTkq_sV0NoHM9_AT7U2LRJwLyLtu&export=download";

const resumeBtn = (
  <Button
    href={heroCV}
    variant="outlined"
    target="_top"
    color="inherit"
    sx={navigationStyles.buttonSpecialStyleHover}
  >
    Resume
  </Button>
);

const Navigation = () => {
  const theme = useTheme();
  const isSamll = useMediaQuery(theme.breakpoints.down("md"));
  const [navDrawer, setNavDrawer] = useState(false);

  const navTo = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
  };

  const navDrawerTouggle = () => {
    setNavDrawer((prevNabDrawer) => !prevNabDrawer);
  };

  const naviagtionItem = naviagtionItems.map((nav) => {
    return (
      <Button
        key={nav.id}
        onClick={() => {
          setTimeout(() => {
            navTo(nav.id);
          }, 3);
          navDrawerTouggle();
        }}
        sx={navigationStyles.buttonStyleHover}
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
          {resumeBtn}
        </Stack>
      ) : (
        <Wrapper>
          <IconButton onClick={navDrawerTouggle}>
            <MenuOpenIcon sx={navigationStyles.openMenuIconStyle} />
          </IconButton>
          <SwipeableDrawer
            PaperProps={navigationStyles.swapDrawerStyle}
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
                  sx={navigationStyles.toolbarStyle}
                />
              </Toolbar>
            </AppBar>
            <Stack sx={navigationStyles.stackStyles} spacing={7}>
              {naviagtionItem}
              {resumeBtn}
            </Stack>
          </SwipeableDrawer>
        </Wrapper>
      )}
    </Box>
  );
};

export default Navigation;
