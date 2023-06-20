import {
  Typography,
  SvgIcon,
  Box,
  Link,
  List,
  ListItemText,
  Button,
  ListItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  layoutStyles,
  demoProjectsStyles,
} from "../../../../../scripts/styles.script";
import {
  ExternalLink,
  FolderSvg,
  GitHub,
} from "../../../../../scripts/icons.script";
import projectsData from "../../../../../data/projects.data";
import { useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Wrapper from "../../../../Helper/Wrapper.component";

// start of maps

const demoProjectLive = projectsData[1].map((demoProjects) => {
  return (
    <ListItem key={demoProjects.title} sx={demoProjectsStyles.demoBox}>
      <Grid sx={demoProjectsStyles.itemHeader}>
        <Box>
          <SvgIcon sx={demoProjectsStyles.fileSvg}>
            <FolderSvg />
          </SvgIcon>
        </Box>
        <Box>
          <Link
            target="_blank"
            sx={demoProjectsStyles.svgLinkStyles}
            href={demoProjects.codeLink}
          >
            <SvgIcon sx={demoProjectsStyles.SvgStyles}>
              <GitHub />
            </SvgIcon>
          </Link>
          <Link
            target="_blank"
            sx={demoProjectsStyles.svgLinkStyles}
            href={demoProjects.liveLink}
          >
            <SvgIcon sx={demoProjectsStyles.SvgStyles}>
              <ExternalLink />
            </SvgIcon>
          </Link>
        </Box>
      </Grid>
      <Link
        sx={{ textDecoration: "none" }}
        target="_blank"
        href={demoProjects.liveLink}
      >
        <Typography
          variant="body1"
          className="project-title"
          sx={demoProjectsStyles.DemoProjectTitle}
        >
          {demoProjects.title}
        </Typography>
      </Link>
      <Typography variant="p" sx={demoProjectsStyles.DemoProjectDiscription}>
        {demoProjects.description}
      </Typography>

      <List sx={demoProjectsStyles.DemoProjectsToolsList}>
        <ListItemText
          primaryTypographyProps={demoProjectsStyles.DemoProjectToolStyle}
          primary={demoProjects.tools[0]}
        />
        <ListItemText
          primaryTypographyProps={demoProjectsStyles.DemoProjectToolStyle}
          primary={demoProjects.tools[1]}
        />
        <ListItemText
          primaryTypographyProps={demoProjectsStyles.DemoProjectToolStyle}
          primary={demoProjects.tools[2]}
        />
      </List>
    </ListItem>
  );
});

const demoProjectNoLive = projectsData[2].map((demoProjects) => {
  return (
    <ListItem key={demoProjects.title} sx={demoProjectsStyles.demoBox}>
      <Grid sx={demoProjectsStyles.itemHeader}>
        <Box>
          <SvgIcon sx={demoProjectsStyles.fileSvg}>
            <FolderSvg />
          </SvgIcon>
        </Box>
        <Box>
          <Link
            target="_blank"
            sx={demoProjectsStyles.svgLinkStyles}
            href={demoProjects.codeLink}
          >
            <SvgIcon sx={demoProjectsStyles.SvgStyles}>
              <GitHub />
            </SvgIcon>
          </Link>
        </Box>
      </Grid>
      <Link
        sx={{ textDecoration: "none" }}
        target="_blank"
        href={demoProjects.codeLink}
      >
        <Typography
          variant="body1"
          className="project-title"
          sx={demoProjectsStyles.DemoProjectTitle}
        >
          {demoProjects.title}
        </Typography>
      </Link>
      <Typography variant="p" sx={demoProjectsStyles.DemoProjectDiscription}>
        {demoProjects.description}
      </Typography>

      <List sx={demoProjectsStyles.DemoProjectsToolsList}>
        <ListItemText
          primaryTypographyProps={demoProjectsStyles.DemoProjectToolStyle}
          primary={demoProjects.tools[0]}
        />
        <ListItemText
          primaryTypographyProps={demoProjectsStyles.DemoProjectToolStyle}
          primary={demoProjects.tools[1]}
        />
        <ListItemText
          primaryTypographyProps={demoProjectsStyles.DemoProjectToolStyle}
          primary={demoProjects.tools[2]}
        />
      </List>
    </ListItem>
  );
});

const demoProject = [...demoProjectLive, ...demoProjectNoLive];
const constDemo = demoProject.slice(0, 3);
const hiddenDemo = demoProject.slice(3);

// end of maps

const DemoProjects = () => {
  const ref = useRef(null);
  const demosTitle = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isViewDemos = useInView(demosTitle, { once: true });
  const [isShown, setIsShown] = useState(false);

  const showToggleHandler = () => {
    setIsShown((pevState) => !pevState);
  };

  // start styles

  const demoTitle = {
    fontSize: `clamp(20px,5vw,30px)`,
    color: layoutStyles.mainFontColor,
    fontWeight: "600",
    opacity: isViewDemos ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)1s",
  };

  const demoSubTitle = {
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainStyleColor,
    fontSize: `clamp(18px,4vw,24px)`,
    opacity: isViewDemos ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)1.2s",
    textAlign: "center",
    marginTop: "1rem",
  };

  const projectListContainer = {
    display: "grid",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    gridTemplateColumns: {
      md: `repeat(3, minmax(265px, 1fr))`,
    },
    gap: "15px",
    margin: "30px 0 30px ",
    transform: isInView ? "none" : "translateY(25px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s",
  };

  //end styles
  return (
    <Wrapper>
      <Grid sx={{ margin: "0 auto 10px" }}>
        <Typography ref={demosTitle} variant="h2" sx={demoTitle}>
          Other Noteworthy Demos.
        </Typography>
        <Typography variant="h4" sx={demoSubTitle}>
          Archive
        </Typography>
      </Grid>
      <List ref={ref} sx={projectListContainer}>
        {constDemo}
        {isShown && hiddenDemo}
      </List>
      <Button
        onClick={showToggleHandler}
        variant="outlined"
        color="inherit"
        sx={demoProjectsStyles.isShownBtn}
      >
        {isShown ? "Hide" : "Show More"}
      </Button>
    </Wrapper>
  );
};

export default DemoProjects;
