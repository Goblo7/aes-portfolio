import { Grid, Typography, SvgIcon } from "@mui/material";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { layoutStyles } from "../../../../styles/layout.styles";
import { AeLogo } from "../../../../scripts/icons.script";
import { useInView } from "framer-motion";
import SectionWrapper from "../SectionWrapper.component";

// start styles

const heroContainerController = {
  display: "flex",
  minHeight: "inherit",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
};

const heroContainer = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  height: "100%",
};

const heroSubContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", md: "flex-start" },
  paddingBottom: { xs: "9.5vh", md: "0" },
};

const aELogo = {
  display: "inline-block",
  height: "100%",
  width: {
    xs: "8rem",
    sm: "12rem",
    md: "18rem",
    lg: "21.8rem",
    xl: "22.9rem",
    overSize: "31.8rem",
  },
  color: layoutStyles.paperColor,
  strokeWidth: "0.3%",
  strokeDashoffset: "0",
  strokeDasharray: "0",
  animation: {
    md: `dashNeon 5s ease-in-out infinite alternate 2.2s, showMd 2.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s`,
    xs: `dashNeon 5s ease-in-out infinite alternate 2.2s, showXs 2.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s`,
  },
  "@keyframes dashNeon": {
    "0%": {
      stroke: layoutStyles.paperColor,
      color: layoutStyles.lightMainColor,
    },
    "100%": {
      stroke: layoutStyles.secandryFontColor,
      color: layoutStyles.paperColor,
    },
  },
  "@keyframes showMd": {
    "0%": {
      opacity: "0",
      transform: `translateX(25%)`,
    },
    "70%": {
      opacity: "0",
      transform: `translateX(7.5%)`,
    },
    "100%": {
      opacity: "1",
      transform: `translateX(0%)`,
    },
  },
  "@keyframes showXs": {
    "0%": {
      opacity: "0",
      transform: `translateX(40%)`,
    },
    "70%": {
      opacity: "0",
      transform: `translateX(18%)`,
    },
    "100%": {
      opacity: "1",
      transform: `translateX(0%)`,
    },
  },
};

const heroTitleStyle = {
  fontSize: `clamp(16px, 3.5vw, 53px)`,
  color: layoutStyles.paperColor,
  fontFamily: layoutStyles.secandryFontFamily,
  animation: `showTitle 2s cubic-bezier(0.17, 0.55, 0.55, 1) forwards 0.3s`,
  "@keyframes showTitle": {
    "0%": {
      opacity: "0",
      color: layoutStyles.secandryFontColor,
    },
    "70%": {
      opacity: "0",
      color: layoutStyles.secandryFontColor,
    },
    "100%": {
      opacity: "1",
      color: layoutStyles.secandryFontColor,
    },
  },
};

//end styles

export default function HeroSection() {
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
    <SectionWrapper className={heroContainerController}>
      <Grid container sx={heroContainer}>
        <Grid ref={ref} item sx={heroSubContainer} flexGrow={1}>
          <Typography variant="inherit" sx={greetingStyle}>
            Hello, my name is
          </Typography>
          <Typography variant="h2" sx={heroNameStyle}>
            Ahmed Ehab.
          </Typography>
          <Typography variant="string" sx={heroTitleStyle}>
            I'm a <span ref={typer}></span>
          </Typography>
        </Grid>
        <Grid item>
          <SvgIcon sx={aELogo}>
            <AeLogo />
          </SvgIcon>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
