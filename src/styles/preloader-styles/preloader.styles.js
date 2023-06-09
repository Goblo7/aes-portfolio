const preloaderStyles = {
  gobloLogoStyles: {
    stroke: "#6633ff ",
    strokeWidth: "2px",
    fill: "#020c1b",
    width: "100px",
    height: "100px",
    strokeDasharray: "1000",
    strokeDashoffset: "1000",
    strokeLinecap: "round",
    animation: "fadingOut 2s forwards  2.3s, scaling 1.95s forwards 2.3s",
    "@keyframes fadingOut": {
      "0%": {
        opacity: "1",
      },
      "15%": {
        opacity: "1",
      },
      "70%": {
        opacity: "1",
      },
      "100%": {
        opacity: "0",
      },
    },
    "@keyframes scaling": {
      "0%": {
        transform: `scale(1,1)`,
      },
      "70%": {
        transform: `scale(1,1)`,
      },
      "80%": {
        transform: `scale(1,1)`,
      },
      "100%": {
        transform: `scale(0,0)`,
      },
    },
  },
};

export default preloaderStyles;
