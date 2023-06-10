import { SvgIcon, Typography, Box, Grid } from "@mui/material";
import {
  layoutStyles,
  headerSectionStyle,
} from "../../../../styles/layout.styles";
import { WebBuild } from "../../../../assets/icons.assets";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Project from "./projects/project-protolio.component";
import ProjectDemo from "./projects/porject-demo-protolio.component";
import styles from "./portolio-section.component.module.css";

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
    fontSize: { lg: "10.5rem", md: "9rem", xs: "8rem" },
    color: layoutStyles.mainStyleColor,
  },
];

/* styles end*/

export default function PortofiloSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const aboutProject = {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "-3rem",
    opacity: isInView ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)0.8s",
  };

  return (
    <Grid margin="0 auto" paddingTop="13vh" container maxWidth="68rem">
      <Typography variant="h2" sx={headerSectionStyle}>
        Portofilo
      </Typography>
      <Box ref={ref} sx={aboutProject}>
        <Typography variant="h5" sx={aboutProjectTitle[0]}>
          Some Things I've Built.
        </Typography>
        <SvgIcon sx={aboutProjectTitle[1]}>
          <WebBuild
            upperTab={styles.upperTab}
            leftTab={styles.leftTab}
            middleTab={styles.middleTab}
            rightTitle={styles.rightTitle}
            phone1={styles.phone1}
            phone2={styles.phone2}
            phone3={styles.phone3}
            phone4={styles.phone4}
            homePhone={styles.homePhone}
            pcPower={styles.pcPower}
            clockBorder={styles.clockBorder}
            clockArrows={styles.clockArrows}
            fristHours={styles.fristHours}
            secHours={styles.secHours}
            AE={styles.AE}
            wheel={styles.wheel}
          />
        </SvgIcon>
      </Box>
      <Project />
      <ProjectDemo />
    </Grid>
  );
}
