import { Grid, Typography, SvgIcon } from "@mui/material";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { layoutStyles } from "../../../../styles/layout.styles";
import AeLogo from "../../../../assets/logo/ae-logo.assets";
import { useInView } from "framer-motion";

const heroContainer = {
  paddingTop: {
    xs: "17rem",
    sm: "21rem",
    md: "15rem",
    xl: "15rem",
    overSize: "12rem",
  },
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
};

const aELogo = {
  display: "inline-block",
  // right: {
  //         xs: "35%",
  //        sm: "30%",
  //         md: "35%",
  //         lg: "-2%",
  //         xl: "-16.1%"
  // },
  //bottom:"0", top:"0",
  height: "100%",

  //{    xs: "68rem",
  //     sm: "85rem",
  //     md: "89rem",
  //     lg: "66rem",
  //     xl: "66rem",
  // },
  width: {
    xs: "6rem",
    sm: "11rem",
    md: "21.8rem",
    lg: "21.8rem",
    xl: "22.9rem",
    overSize: "31.8rem",
  },

  //{    xs: "35%",
  //     sm: "38%",
  //     md: "32%",
  //     lg: "38%",
  //     xl: "53%",
  // },
  paddingTop: "4rem",
  color: layoutStyles.lightMainColor,
  strokeWidth: "0.3%",
  strokeDashoffset: "0",
  strokeDasharray: "0",
  animation: `dashNeon 5s ease-in-out infinite alternate`,
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
};

export default function HeroSection() {
  const typer = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const greetingStyle = {
    lineHeight: "1.1",
    fontSize: `clamp(13px,3vw,22px)`,
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainStyleColor,
    transform: isInView ? "none" : "translateY(75px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.3s",
  };

  const heroNameStyle = {
    fontWeight: 600,
    fontSize: `clamp(40px, 8vw, 80px)`,
    margin: "0",
    color: layoutStyles.mainFontColor,
    fontFamily: layoutStyles.mainFontFamily,
    transform: isInView ? "none" : "translateY(75px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s",
  };

  const heroTitleStyle = {
    fontSize: `clamp(16px, 5vw, 54px)`,
    color: layoutStyles.secandryFontColor,
    fontFamily: layoutStyles.secandryFontFamily,
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)1s",
  };

  useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: ["Front-End Developer.", "Software Engineer."],
      typeSpeed: 70,
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
    <Grid ref={ref} sx={heroContainer}>
      <Grid item sx={{ width: { xs: "100%", lg: "fit-content" } }} flexGrow={1}>
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
      <Grid item alignSelf="center" justifySelf="center">
        <SvgIcon className="SvgG" sx={aELogo}>
          <AeLogo />
        </SvgIcon>
      </Grid>
    </Grid>
  );
}
