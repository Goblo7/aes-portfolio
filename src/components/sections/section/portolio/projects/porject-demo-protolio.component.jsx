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
import { layoutStyles } from "../../../../../styles/layout.styles";
import {
  ExternalLink,
  FolderSvg,
  GitHub,
} from "../../../../../assets/icons.assets";
import demoProjectsData from "../../../../../scripts/projects-data/demo-projects-data.script";
import { useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
// start Styles

const DemoContianter = {
  display: "grid",
  justifyContent: "center",
  width: "100%",
  textAlign: "center",
  marginTop: "5rem",
};

const ListConitner = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const demoBox = {
  boxShadow: "0 10px 30px -15px rgba(2,12,27,0.9)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: "100%",
  padding: "2rem 1.75rem",
  borderRadius: "1rem",
  backgroundColor: "#14233d",
  overFlow: "auto",
  maxWidth: "24rem",
  transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
  animation: "inAnimation 0.3s ease-in",
  "&:hover ": {
    transform: "translateY(-8px)",
  },
  "&:hover .project-title": {
    color: layoutStyles.mainStyleColor,
  },
  " @keyframes inAnimation": {
    "0%": {
      opacity: "0",
      visibility: "hidden,",
    },
    "100%": {
      opacity: "1",
      visibility: "visible",
    },
  },
};

const itemHeader = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
};

const fileSvg = {
  fontSize: "2.75rem",
  color: layoutStyles.mainStyleColor,
};

const SvgStyles = {
  color: layoutStyles.secandryFontColor,
  "&:hover": {
    color: layoutStyles.mainStyleColor,
  },
};

const svgLinkStyles = { padding: "10px 5px" };

const DemoProjectTitle = {
  fontSize: `clamp(18px,4vw, 20px)`,
  fontWeight: "600",
  color: layoutStyles.mainFontColor,
  marginBlock: "1rem",
};

const DemoProjectDiscription = {
  color: layoutStyles.projectTextColor,
  textAlign: "start",
};

const DemoProjectsToolsList = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "4%",
  width: "70%",
};

const DemoProjectToolStyle = {
  color: layoutStyles.secandryFontColor,
  fontFamily: layoutStyles.secandryFontFamily,
  fontSize: "13px",
};

const isShownBtn = {
  color: layoutStyles.mainStyleColor,
  transition: "all .2s ease-in-out;",
  backgroundColor: layoutStyles.paperColor,
  marginBottom: "4rem",
  width: { sm: "8rem", xs: "7rem" },
  height: { sm: "3.1rem", xs: "3rem" },
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

// End Styles

// start of maps

const demoProjectLive = demoProjectsData[0].map((demoProjects) => {
  return (
    <ListItem key={demoProjects.title} item sx={demoBox}>
      <Grid sx={itemHeader}>
        <Box>
          <SvgIcon sx={fileSvg}>
            <FolderSvg />
          </SvgIcon>
        </Box>
        <Box>
          <Link target="_blank" sx={svgLinkStyles} href={demoProjects.codeLink}>
            <SvgIcon sx={SvgStyles}>
              <GitHub />
            </SvgIcon>
          </Link>
          <Link target="_blank" sx={svgLinkStyles} href={demoProjects.liveLink}>
            <SvgIcon sx={SvgStyles}>
              <ExternalLink />
            </SvgIcon>
          </Link>
        </Box>
      </Grid>
      <Typography
        variant="body1"
        className="project-title"
        sx={DemoProjectTitle}
      >
        {demoProjects.title}
      </Typography>
      <Typography variant="p" sx={DemoProjectDiscription}>
        {demoProjects.description}
      </Typography>

      <List sx={DemoProjectsToolsList}>
        <ListItemText
          primaryTypographyProps={DemoProjectToolStyle}
          primary={demoProjects.tools[0]}
        />
        <ListItemText
          primaryTypographyProps={DemoProjectToolStyle}
          primary={demoProjects.tools[1]}
        />
        <ListItemText
          primaryTypographyProps={DemoProjectToolStyle}
          primary={demoProjects.tools[2]}
        />
      </List>
    </ListItem>
  );
});

const demoProjectNoLive = demoProjectsData[1].map((demoProjects) => {
  return (
    <ListItem key={demoProjects.title} item sx={demoBox}>
      <Grid sx={itemHeader}>
        <Box>
          <SvgIcon sx={fileSvg}>
            <FolderSvg />
          </SvgIcon>
        </Box>
        <Box>
          <Link target="_blank" sx={svgLinkStyles} href={demoProjects.codeLink}>
            <SvgIcon sx={SvgStyles}>
              <GitHub />
            </SvgIcon>
          </Link>
        </Box>
      </Grid>
      <Typography
        variant="body1"
        className="project-title"
        sx={DemoProjectTitle}
      >
        {demoProjects.title}
      </Typography>
      <Typography variant="p" sx={DemoProjectDiscription}>
        {demoProjects.description}
      </Typography>

      <List sx={DemoProjectsToolsList}>
        <ListItemText
          primaryTypographyProps={DemoProjectToolStyle}
          primary={demoProjects.tools[0]}
        />
        <ListItemText
          primaryTypographyProps={DemoProjectToolStyle}
          primary={demoProjects.tools[1]}
        />
        <ListItemText
          primaryTypographyProps={DemoProjectToolStyle}
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

const ProjectDemo = () => {
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
    margin: "0 0 10px",
    color: layoutStyles.mainFontColor,
    fontWeight: "600",
    opacity: isViewDemos ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)1s",
  };

  const demoSubTitle = {
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainStyleColor,
    fontSize: `clamp(10px,4vw,20px)`,
    opacity: isViewDemos ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)1.2s",
  };

  const projectListContainer = {
    display: "grid",
    gridTemplateColumns: {
      md: `repeat(3, minmax(300px, 1fr))`,
    },
    gap: "15px",
    margin: "30px 0 30px ",
    transform: isInView ? "none" : "translateY(25px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s",
  };

  //end styles
  return (
    <Grid container sx={DemoContianter}>
      <Typography ref={demosTitle} variant="h2" sx={demoTitle}>
        Other Noteworthy Demos.
      </Typography>
      <Typography variant="P" sx={demoSubTitle}>
        Archive
      </Typography>
      <Grid item sx={ListConitner}>
        <List ref={ref} sx={projectListContainer}>
          {constDemo}
          {isShown && hiddenDemo}
        </List>
      </Grid>
      <Box>
        <Button
          onClick={showToggleHandler}
          variant="outlined"
          color="inherit"
          sx={isShownBtn}
        >
          {isShown ? "Hide" : "Show More"}
        </Button>
      </Box>
    </Grid>
  );
};

export default ProjectDemo;
