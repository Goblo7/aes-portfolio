import { Button, SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Dish, Satellite } from "../../../../assets/icons.assets";
import { layoutStyles } from "../../../../styles/layout.styles";
import styles from "./contact-styles-section.component.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionWrapper from "../sections-wrapper.component";
// start styles

const contactContainerStyles = {
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
};

const satelliteContainer = {
  marginTop: "4rem",
  marginBottom: { md: "7.5rem", sm: "5rem", xs: "4rem" },
};

const contactTitle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  margin: "0 auto 25px",
  fontSize: `clamp(30px,5vw,35px)`,
  whiteSpace: "nowrap",
  color: layoutStyles.mainStyleColor,
  fontWeight: "669",
};

const contactDescriptionHeader = {
  fontFamily: layoutStyles.secandryFontFamily,
  color: layoutStyles.mainFontColor,
  fontWeight: "500",
  fontSize: `clamp(19px,5vw, 35px)`,
  marginBottom: "1rem",
};

const contactDescriptionPraragraph = {
  color: layoutStyles.secandryFontColor,
  fontSize: `clamp(15px, 4vw, 18px)`,
};

const ButtonStyles = {
  width: { md: "11rem", sm: "10rem", xs: "9rem" },
  marginTop: "3rem",
  padding: "1rem 1rem",
  background: layoutStyles.paperColor,
  color: layoutStyles.mainStyleColor,
  fontSize: "1.1rem",
  position: "relative",
  borderRadius: "1rem",
  "&:hover": {
    background: "#14233d",
  },
};

const contactDescriptionHelloWord = {
  fontSize: `clamp(15px, 4vw, 18px)`,
  color: layoutStyles.mainStyleColor,
};

const dishContainer = {
  marginTop: { md: "5rem", sm: "2rem", xs: "1.5" },
  paddingBottom: "1rem",
};

// end styles

const contactMe = "mailto:ahmedehab.sg@gmail.com";

export default function ContactSection() {
  const refStat = useRef(null);
  const refDish = useRef(null);
  const contactView = useRef(null);
  const isInViewSat = useInView(refStat, { once: true });
  const isInViewDish = useInView(refDish, { once: true });
  const isInViewContact = useInView(contactView, { once: true });

  // start styles

  const satelliteStyles = {
    width: { lg: "5.5rem", md: "5rem", sm: "4.5rem", xs: "3.8rem" },
    height: "100%",
    animation: {
      xl: "xlMovingSatellite 90s ease-in-out infinite 0s",
      md: "mdMovingSatellite 90s ease-in-out infinite 0s",
      sm: "smMovingSatellite 90s ease-in-out infinite 0s",
      xs: "xsMovingSatellite 90s ease-in-out infinite 0s",
    },
    opacity: isInViewSat ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s",
    "@keyframes xlMovingSatellite": {
      "0%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
      "30%": {
        transform: `translateX(700%) rotateZ(90deg)`,
      },
      " 70%": {
        transform: `translateX(-700%) rotateZ(0deg)`,
      },
      "100%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
    },
    "@keyframes mdMovingSatellite": {
      "0%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
      "30%": {
        transform: `translateX(500%) rotateZ(90deg)`,
      },
      " 70%": {
        transform: `translateX(-500%) rotateZ(0deg)`,
      },
      "100%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
    },
    "@keyframes smMovingSatellite": {
      "0%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
      "30%": {
        transform: `translateX(360%) rotateZ(90deg)`,
      },
      " 70%": {
        transform: `translateX(-360%) rotateZ(0deg)`,
      },
      "100%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
    },
    "@keyframes xsMovingSatellite": {
      "0%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
      "30%": {
        transform: `translateX(195%) rotateZ(90deg)`,
      },
      " 70%": {
        transform: `translateX(-195%) rotateZ(0deg)`,
      },
      "100%": {
        transform: `translateX(0%) rotateZ(45deg)`,
      },
    },
  };

  const dishStyle = {
    fontSize: { lg: "5rem", sm: "4rem", xs: "3.8rem" },
    color: layoutStyles.mainStyleColor,
    paddingTop: "",
    opacity: isInViewDish ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
  };

  const sayHelloContainer = {
    justifyItems: "center",
    transform: isInViewContact ? "none" : "translateY(20px)",
    opacity: isInViewContact ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
    marginTop: "5rem",
    marginBottom: "3rem",
  };

  //end styles

  return (
    <SectionWrapper className={contactContainerStyles}>
      <Grid sx={satelliteContainer}>
        <SvgIcon ref={refStat} id={styles.satelliteColor} sx={satelliteStyles}>
          <Satellite
            wave1={styles.wave1}
            wave2={styles.wave2}
            wave3={styles.wave3}
            wave4={styles.wave4}
          />
        </SvgIcon>
      </Grid>
      <Grid display="grid" sm={8} ref={contactView} sx={sayHelloContainer}>
        <Typography variant="h2" sx={contactTitle}>
          Contact Me
        </Typography>
        <Typography variant="h5" sx={contactDescriptionHeader}>
          Please Don't Hesitate To Reach Out
        </Typography>
        <Typography variant="p" sx={contactDescriptionPraragraph}>
          It is always a most delightful moment for me when meeting new people,
          Every great network starts with a simple {""}
          <Typography variant="caption" sx={contactDescriptionHelloWord}>
            Hello
          </Typography>
          .
        </Typography>
        <Button
          className={styles.contactButton}
          href={contactMe}
          disableElevation
          sx={ButtonStyles}
        >
          Say Hello
        </Button>
      </Grid>
      <Grid sx={dishContainer}>
        <SvgIcon id={styles.dishColor} ref={refDish} sx={dishStyle}>
          <Dish
            dish={styles.dish}
            dishWaves={styles.dishWaves}
            wave1={styles.wave1}
            wave2={styles.wave2}
            wave3={styles.wave3}
          />
        </SvgIcon>
      </Grid>
    </SectionWrapper>
  );
}
