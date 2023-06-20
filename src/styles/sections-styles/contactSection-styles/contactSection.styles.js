import { layoutStyles } from "../../../scripts/styles.script";

const contactStyles = {
  contactContainerStyles: {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
  },

  satelliteContainer: {
    marginTop: "4rem",
    marginBottom: { md: "7.5rem", sm: "5rem", xs: "4rem" },
  },

  contactTitle: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    margin: "0 auto 25px",
    fontSize: `clamp(30px,5vw,35px)`,
    whiteSpace: "nowrap",
    color: layoutStyles.mainStyleColor,
    fontWeight: "669",
  },

  contactDescriptionHeader: {
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainFontColor,
    fontWeight: "500",
    fontSize: `clamp(22px, 5vw, 32px)`,
    marginBottom: "1rem",
  },

  contactDescriptionPraragraph: {
    color: layoutStyles.secandryFontColor,
    fontSize: `clamp(15px, 4vw, 18px)`,
  },

  ButtonStyles: {
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
  },

  contactDescriptionHelloWord: {
    fontSize: `clamp(15px, 4vw, 18px)`,
    color: layoutStyles.mainStyleColor,
  },

  dishContainer: {
    marginTop: { md: "5rem", sm: "2rem", xs: "1.5" },
    paddingBottom: "1rem",
  },
};

export default contactStyles;
