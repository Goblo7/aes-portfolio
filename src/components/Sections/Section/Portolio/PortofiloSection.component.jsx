import { SvgIcon, Typography, Box } from "@mui/material";
import { layoutStyles } from "../../../../styles/layout.styles";
import { WebBuild } from "../../../../scripts/icons.script";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Project from "./Projects/Project.component";
import ProjectDemo from "./Projects/ProjectDemo.component";
import styles from "./PortofiloSection.module.css";
import SectionWrapper from "../SectionWrapper.component";
/* styles start*/

const portolioContainer = {
  margin: "0 auto",
  paddingTop: "5rem",
  maxWidth: "68rem",
};

const headerSectionStyle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  margin: { sm: "7px 0px 0px", xs: "7px 0px 25px" },
  fontSize: `clamp(30px,5vw,35px)`,
  whiteSpace: "nowrap",
  fontFamily: layoutStyles.mainFontFamily,
  color: layoutStyles.mainStyleColor,
  fontWeight: "669",
  "&:after": {
    content: `""`,
    display: "inline",
    top: "5px",
    width: {
      xs: "6rem",
      sm: "23rem",
      md: "40rem",
      lg: "53rem",
    },
    height: "1px",
    marginLeft: "20px",
    backgroundColor: layoutStyles.lineMainColor,
  },
};

const aboutProjectTitle = [
  {
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainFontColor,
    fontWeight: "500",
    margin: "auto",
    fontSize: `clamp(22px,5vw,32px)`,
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
    <SectionWrapper className={portolioContainer}>
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
    </SectionWrapper>
  );
}
