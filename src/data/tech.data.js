import {
  React,
  VsCode,
  Vs,
  Mui,
  GitHubColord,
  Css,
  Html,
  Js,
  Jsx,
  CPlusPlus,
} from "../assets/icons.assets";

export const techData = [
  [
    {
      langugeName: "C++",
      langugeLogo: <CPlusPlus />,
    },
    {
      langugeName: "HTML5",
      langugeLogo: <Html />,
    },
    {
      langugeName: "CSS3",
      langugeLogo: <Css />,
    },
    {
      langugeName: "JavaScript",
      langugeLogo: <Js />,
    },
    {
      langugeName: "JSX",
      langugeLogo: <Jsx />,
    },
  ],
  [
    {
      devToolName: "Visual Studio",
      devToolLogo: <Vs />,
    },
    {
      devToolName: "VsCode",
      devToolLogo: <VsCode />,
    },
    {
      devToolName: "ReactJs",
      devToolLogo: <React />,
    },
    {
      devToolName: "Material-UI",
      devToolLogo: <Mui />,
    },
    {
      devToolName: "GitHub",
      devToolLogo: <GitHubColord />,
    },
  ],
];

export default techData;
