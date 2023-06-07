import { SvgIcon, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  layoutStyles,
  headerSectionStyle,
} from "../../../../styles/layout.styles";
import { WebBuild } from "../../../../assets/icons.assets";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Project from "./projects/project-protolio.component";
import ProjectDemo from "./projects/porject-demo-protolio.component";

/* styles start*/

const aboutProjectTitle = [
  {
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainFontColor,
    fontWeight: "500",
    margin: "auto",
    fontSize: `clamp(19px,6vw,27px)`,
  },
  {
    fontSize: "8rem",
    color: layoutStyles.mainStyleColor,
  },
];

/* styles end*/

export default function PortofiloSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const aboutProject = {
    display: "flex",
    margin: "1.5rem auto",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "-3rem",
    transform: isInView ? "none" : "translateY(25px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s",
  };

  return (
    <Grid margin="0 auto" paddingTop="13vh" container maxWidth="68rem">
      <Typography ref={ref} variant="h2" sx={headerSectionStyle}>
        Portofilo
      </Typography>
      <Box sx={aboutProject}>
        <Typography variant="h5" sx={aboutProjectTitle[0]}>
          Some Things I've Built.
        </Typography>
        <SvgIcon sx={aboutProjectTitle[1]}>
          <WebBuild />
        </SvgIcon>
      </Box>
      <Project />
      <ProjectDemo/>
    </Grid>
  );
}