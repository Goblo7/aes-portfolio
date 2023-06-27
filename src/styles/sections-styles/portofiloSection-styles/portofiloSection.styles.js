import { layoutStyles } from "../../../scripts/styles.script";

const portolioStyles = {
  portolioContainer: {
    margin: "0 auto",
    paddingTop: "5rem",
    maxWidth: "68rem",
  },

  headerSectionStyle: {
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
  },

  aboutProjectTitle: [
    {
      fontFamily: layoutStyles.secandryFontFamily,
      color: layoutStyles.mainFontColor,
      fontWeight: "500",
      margin: "auto",
      fontSize: `clamp(22px,5vw,32px)`,
    },
    {
      fontSize: { lg: "14.5rem", md: "12rem", xs: "10rem" },
      color: layoutStyles.mainStyleColor,
    },
  ],
};

export default portolioStyles;
