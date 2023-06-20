import { layoutStyles } from "../../../../scripts/styles.script";

const demoProjectsStyles = {
  demoBox: {
    boxShadow: "0 10px 30px -15px rgba(2,12,27,0.9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    padding: "2rem 1.75rem",
    borderRadius: "1rem",
    backgroundColor: "#14233d",
    overFlow: "auto",
    maxWidth: "24rem",
    transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
    animation: "inAnimation 0.3s ease-in",
    "&:hover ": {
      transform: "translateY(-8px)",
    },
    "&:hover .project-title": {
      color: layoutStyles.mainStyleColor,
    },
    " @keyframes inAnimation": {
      "0%": {
        opacity: "0",
        visibility: "hidden,",
      },
      "100%": {
        opacity: "1",
        visibility: "visible",
      },
    },
  },

  itemHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  fileSvg: {
    fontSize: "2.75rem",
    color: layoutStyles.mainStyleColor,
  },

  SvgStyles: {
    color: layoutStyles.secandryFontColor,
    "&:hover": {
      color: layoutStyles.mainStyleColor,
    },
  },

  svgLinkStyles: { padding: "10px 5px" },

  DemoProjectTitle: {
    fontSize: `clamp(18px,4vw, 20px)`,
    fontWeight: "600",
    color: layoutStyles.mainFontColor,
    marginBlock: "1rem",
  },

  DemoProjectDiscription: {
    color: layoutStyles.projectTextColor,
    textAlign: "start",
  },

  DemoProjectsToolsList: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "4%",
    width: "70%",
  },

  DemoProjectToolStyle: {
    color: layoutStyles.secandryFontColor,
    fontFamily: layoutStyles.secandryFontFamily,
    fontSize: "13px",
  },

  isShownBtn: {
    color: layoutStyles.mainStyleColor,
    transition: "all .2s ease-in-out;",
    backgroundColor: layoutStyles.paperColor,
    margin: "0 auto 4rem",
    width: { sm: "8rem", xs: "7rem" },
    height: { sm: "3.1rem", xs: "3rem" },
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
};

export default demoProjectsStyles;
