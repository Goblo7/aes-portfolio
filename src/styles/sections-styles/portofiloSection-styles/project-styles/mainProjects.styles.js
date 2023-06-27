import { layoutStyles } from "../../../../scripts/styles.script";

const mainProjectsStyles = {
  projectContainerStyles: {
    boxSizing: "border-box",
    boxShadow: "0 10px 30px -15px rgba(2,12,27,0.9)",
    backgroundColor: "#14233d",
    marginTop: "3rem",
    padding: "15px",
    borderRadius: "1.7rem",
    width: { lg: "auto", md: "85%", sm: "80%" },
    margin: "0 auto 5%",
  },

  projectContainerDirectionsEven: {
    display: "flex",
    overflow: "hidden",
    flexDirection: { md: "row", xs: "column" },
  },

  projectContainerDirectionsOdd: {
    display: "flex",
    overflow: "hidden",
    flexDirection: { md: "row-reverse", xs: "column" },
  },

  projectImgContainerBackground: {
    overflow: "hidden",
    borderRadius: "1rem",
    boxShadow: "0 10px 40px -15px rgba(2,12,27,0.9)",
    maxHeight: { xs: "15rem", sm: "19rem", md: "21rem", lg: "24rem" },
    background: `radial-gradient(circle, rgba(0,99,255,1) 0%, rgba(18,8,126,1) 50%, rgba(20,6,56,1) 100%)`,
    flex: "1 0 60%",
  },

  projectImgStylesConst: {
    width: "100%",
    transition: `transform 10s ,filter 0.8s , WebkitFilter 0.8s, opacity 1s ease-in-out 0s`,
    overflow: "hidden",
    filter: "gray",
    WebkitFilter: `grayscale(1)`,
    "&:hover": {
      transform: {
        xs: `translateY(-51%)`,
        sm: `translateY(-67.3%)`,
        md: `translateY(-64.3%)`,
        lg: `translateY(-73.3%)`,
      },
      filter: "none",
      WebkitFilter: `grayscale(0)`,
      opacity: "1",
    },
  },

  projectImgStylesWhite: {
    opacity: "0.5",
  },

  projectImgStylesBlack: {
    opacity: "0.72",
  },

  projectDescriptionContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-evenly",
    paddingInline: "1%",
    flex: "1 0 40%",
  },

  projectDescriptionHeader: {
    color: layoutStyles.mainFontColor,
    textTransform: "uppercase",
    marginBottom: { lg: "1.5%", xs: "1%" },
    marginTop: "2%",
    fontSize: `clamp(19px, 5vw, 21px)`,
  },

  projectDescription: {
    color: layoutStyles.secandryFontColor,
    fontSize: `clamp(16px, 5vw, 18px)`,
  },

  projectDescriptionUsedToolsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: { lg: "4%", md: "1%", xs: "2%" },
    paddingInline: "10%",
  },

  projectDescriptionToolsItems: {
    color: layoutStyles.mainFontColor,
    fontFamily: layoutStyles.secandryFontFamily,
    fontSize: "15px",
  },

  projectIconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: { lg: "6%", md: "2%", xs: "4%" },
  },

  projectIconStyles: {
    color: layoutStyles.secandryFontColor,
    "&:hover": {
      color: layoutStyles.mainStyleColor,
    },
  },
};

export default mainProjectsStyles;
