import { Grid, Typography, SvgIcon } from "@mui/material";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { layoutStyles, heroStyles } from "../../../../scripts/styles.script";
import { AeLogo } from "../../../../scripts/icons.script";
import { useInView } from "framer-motion";
import SectionWrapper from "../SectionWrapper.component";

const HeroSection = () => {
  const typer = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //start styles

  const greetingStyle = {
    lineHeight: "1.1",
    fontSize: `clamp(13px,3vw,22px)`,
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainStyleColor,
    opacity: isInView ? 1 : 0,
    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s",
  };

  const heroNameStyle = {
    fontWeight: 600,
    fontSize: `clamp(40px, 9vw, 80px)`,
    color: layoutStyles.mainFontColor,
    fontFamily: layoutStyles.mainFontFamily,
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)1.2s",
  };

  //end styles

  useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: [
        "Software Engineer.",
        "Front-End Developer.",
        "UI/UX Designer.",
      ],
      typeSpeed: 63,
      loop: true,
      backSpeed: 70,
      backDelay: 2000,
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <SectionWrapper className={heroStyles.heroContainerController}>
      <Grid container sx={heroStyles.heroContainer}>
        <Grid ref={ref} item sx={heroStyles.heroSubContainer} flexGrow={1}>
          <Typography variant="inherit" sx={greetingStyle}>
            Hello, my name is
          </Typography>
          <Typography variant="h2" sx={heroNameStyle}>
            Ahmed Ehab.
          </Typography>
          <Typography variant="string" sx={heroStyles.heroTitleStyle}>
            I'm a <span ref={typer}></span>
          </Typography>
        </Grid>
        <Grid item>
          <SvgIcon sx={heroStyles.aELogo}>
            <AeLogo />
          </SvgIcon>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default HeroSection;
