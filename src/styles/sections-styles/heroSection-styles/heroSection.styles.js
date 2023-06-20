import { layoutStyles } from "../../../scripts/styles.script";

const heroStyles = {
  heroContainerController: {
    display: "flex",
    minHeight: "inherit",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: "4rem",
  },

  heroContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
  },

  heroSubContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-start" },
    paddingBottom: { xs: "9.5vh", md: "0" },
  },

  aELogo: {
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
  },

  heroTitleStyle: {
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
  },
};

export default heroStyles;
