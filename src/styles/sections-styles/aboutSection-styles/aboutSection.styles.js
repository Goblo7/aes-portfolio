import { layoutStyles } from "../../../scripts/styles.script";


const aboutStyles = {
  aboutContianer: {
    margin: "0 auto 5rem",
    paddingTop: { sm: "10rem", xs: "4rem" },
    maxWidth: "68rem",
    marginTop: "2rem",
  },
  headerSectionStyle: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    margin: "7px 0px 25px",
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
        xs: "5.2rem",
        sm: "23rem",
        md: "40rem",
        lg: "53rem",
      },
      height: "1px",
      marginLeft: "20px",
      backgroundColor: layoutStyles.lineMainColor,
    },
  },

  aboutTitleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroPfpStyle: {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    border: `3px solid ${layoutStyles.lineMainColor}`,
    borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
    borderWidth: "6px",
    position: "relative",
    transition: "all 1s ease-in-out",
    animation: `gobloPfp 8s ease-in-out infinite`,
    maxWidth: { sm: "100%", xs: "68%" },
    "@keyframes gobloPfp": {
      "0%": {
        borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
      },
      "50%": {
        borderRadius: "5% 30% 50% 10% / 20% 30% 5% 30%",
      },
      "100%": {
        borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
      },
    },
  },

  skillsContainer: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    alignContent: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    boxShadow: { xs: "none", sm: "0 10px 30px -15px rgba(2,12,27,0.9)" },
    marginTop: "2rem",
    padding: "15px",
    borderRadius: "1.7rem",
    backgroundColor: { xs: "none", sm: layoutStyles.lightPaperColor },
  },

  tecContainer: {
    width: "100%",
    display: "grid",
    justifyItems: "center",
  },

  skillTitle: {
    textAlign: "center",
    color: layoutStyles.mainFontColor,
    fontFamily: layoutStyles.secandryFontFamily,
    fontSize: `clamp(25px,5vw,30px)`,
  },

  skillTools: {
    gridTemplateColumns: `repeat (2 ,1fr)`,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
  },

  languagesAndDevTitle: {
    textAlign: "center",
    marginTop: "1rem",
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainFontColor,
    fontSize: `clamp(20px,5vw,23px)`,
    "&:after": {
      content: `""`,
      display: "block",
      width: "4rem",
      height: "0.3rem",
      margin: "auto",
      marginTop: "0.3rem",
      backgroundColor: layoutStyles.lineMainColor,
    },
  },

  verticalDivider: {
    borderWidth: "0px 4px 0px 0px",
    borderStyle: "solid",
    alignSelf: "stretch",
    borderColor: layoutStyles.lineMainColor,
    right: "50%",
    left: "50%",
    margin: "20px 0px 0px;",
  },

  heroPfpContainer: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    flexGrow: 1,
    width: "10%",
  },

  DevAndlangListContianer: {
    display: "grid",
    gridTemplateColumns: `repeat(2, 1fr)`,
  },

  pinLocationIconStyles: {
    marginLeft: "0.5rem",
    color: layoutStyles.mainStyleColor,
  },
};

export default aboutStyles;
