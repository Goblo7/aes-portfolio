import { layoutStyles } from "../../../scripts/styles.script";

const navigationStyles = {
  buttonStyleHover: {
    color: layoutStyles.mainFontColor,
    "&:hover": {
      color: layoutStyles.mainStyleColor,
      backgroundColor: layoutStyles.paperColor,
    },
  },

  buttonSpecialStyleHover: {
    color: layoutStyles.mainStyleColor,
    transition: "all .2s ease-in-out;",
    backgroundColor: layoutStyles.paperColor,
    "&:hover": {
      background: "#14233d",
    },
    "&:after,&:before": {
      content: `""`,
      position: "absolute",
      inset: "-0.05rem",
      borderRadius: "inherit",
      background: `radial-gradient(circle, rgba(18,8,126,1) 0%, rgba(136,136,255,1) 50%, rgba(26,6,56,1) 100%)`,
      animtation: `rotation 20s linear infinite`,
      zIndex: "-1",
    },
    "&:after": {
      filter: `blur(0.2rem)`,
    },
    "@keyframes rotation": {
      "0%": {
        circle: "0deg",
      },
      "100%": {
        circle: "360deg",
      },
    },
  },

  openMenuIconStyle: {
    color: layoutStyles.mainStyleColor,
    fontSize: "180%",
  },

  swapDrawerStyle: {
    sx: {
      width: "75%",
      backgroundColor: layoutStyles.lightMainColor,
      backgroundImage: "none",
    },
  },

  toolbarStyle: {
    color: layoutStyles.mainStyleColor,
    fontSize: "250%",
  },
  stackStyles:{
    width:"100%",
    height:"70%",
    alignItems:"center",
    justifyContent: "space-evenly",
  }

};

export default navigationStyles;
