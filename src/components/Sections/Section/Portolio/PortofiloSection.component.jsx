import { SvgIcon, Typography, Box } from "@mui/material";
import { portolioStyles } from "../../../../scripts/styles.script";
import { WebBuild } from "../../../../scripts/icons.script";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MainProjects from "./Projects/MainProjects.component";
import DemoProjects from "./Projects/DemoProjects.component";
import styles from "../../../../styles/sections-styles/portofiloSection-styles/portofiloSection.module.css";
import SectionWrapper from "../SectionWrapper.component";

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
    <SectionWrapper className={portolioStyles.portolioContainer}>
      <Typography variant="h2" sx={portolioStyles.headerSectionStyle}>
        Portofilo
      </Typography>
      <Box ref={ref} sx={aboutProject}>
        <Typography variant="h5" sx={portolioStyles.aboutProjectTitle[0]}>
          Some Things I've Built.
        </Typography>
        <SvgIcon sx={portolioStyles.aboutProjectTitle[1]}>
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
      <MainProjects />
      <DemoProjects />
    </SectionWrapper>
  );
}
