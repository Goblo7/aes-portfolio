import { Button, SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Dish, Satellite } from "../../../../scripts/icons.script";
import { layoutStyles, contactStyles } from "../../../../scripts/styles.script";
import styles from "../../../../styles/sections-styles/contactSection-styles/contactSection.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionWrapper from "../SectionWrapper.component";

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
    <SectionWrapper className={contactStyles.contactContainerStyles}>
      <Grid sx={contactStyles.satelliteContainer}>
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
        <Typography variant="h2" sx={contactStyles.contactTitle}>
          Contact Me
        </Typography>
        <Typography variant="h5" sx={contactStyles.contactDescriptionHeader}>
          Please Don't Hesitate To Reach Out
        </Typography>
        <Typography variant="p" sx={contactStyles.contactDescriptionPraragraph}>
          It is always a most delightful moment for me when meeting new people,
          Every great network starts with a simple {""}
          <Typography
            variant="caption"
            sx={contactStyles.contactDescriptionHelloWord}
          >
            Hello
          </Typography>
          .
        </Typography>
        <Button
          className={styles.contactButton}
          href={contactMe}
          disableElevation
          sx={contactStyles.ButtonStyles}
        >
          Say Hello
        </Button>
      </Grid>
      <Grid sx={contactStyles.dishContainer}>
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
