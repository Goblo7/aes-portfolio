import layoutStyles from "./main-layout.styles";

export const headerSectionStyle = {
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
      xs: "6rem",
      sm: "24rem",
      md: "40rem",
      lg: "53rem",
    },
    height: "1px",
    marginLeft: "20px",
    backgroundColor: layoutStyles.lineMainColor,
  },
};

export default headerSectionStyle;
