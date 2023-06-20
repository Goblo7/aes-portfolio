import { layoutStyles } from "../../scripts/styles.script";

const footerStyles = {
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: layoutStyles.paperColor,
    minWidth: "100%",
    marginTop: "3vh",
  },

  LogoStyle: {
    display: "flex",
    alignItems: "center",
    fontSize: "3.5rem",
    stroke: layoutStyles.mainStrokeColor,
    strokeLinecap: "round",
    color: layoutStyles.mainStyleColor,
  },

  ContactSvg: {
    color: layoutStyles.mainFontColor,
    display: "flex",
    "&:hover": {
      color: layoutStyles.mainStyleColor,
    },
    fontSize: {
      sm: "1.4rem",
      xs: "1.2rem",
    },
  },

  contactSvgContainer: {
    flexBasis: "33.333%",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    marginBottom: { xs: "1rem", lg: "0" },
  },

  tradeMarkLogoStyle: {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    flexGrow: "1",
    textAlign: "center",
    flexBasis: "33.333%",
  },

  tradeMarkDescrpitonStyle: {
    color: layoutStyles.secandryFontColor,
    fontWeight: "500",
    fontFamily: layoutStyles.secandryFontFamily,
  },

  copyrightsContainer: {
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    flexBasis: "33.333%",
    marginTop: { xs: "0.3rem", lg: "0" },
  },

  copyrightsEmail: {
    color: layoutStyles.mainFontColor,
    display: "block",
  },

  copyRights: {
    color: layoutStyles.secandryFontColor,
    display: "block",
  },
};

export default footerStyles;
