import { Grid, Typography, SvgIcon} from "@mui/material"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { layoutStyles } from "../../styles/layout/main-layout.styles";
import AeLogo from "../../assets/logo/ae-logo.assets";



const heroContainer = { paddingTop: {
    xs: "17rem",
    sm: "21rem",
    md: "21rem",
    xl: "21rem",},position:"relative" }

const greetingStyle = {
    lineHeight: "1.1",
    fontSize: "1.1rem", 
    fontFamily: layoutStyles.secandryFontFamily,
    color: layoutStyles.mainStyleColor
}


const heroNameStyle = {
    fontWeight: 600,
    fontSize: `clamp(40px, 8vw, 80px)`,
    margin: "0",
    color: layoutStyles.mainFontColor,
    fontFamily: layoutStyles.mainFontFamily,
}

const heroTitleStyle = {
    fontSize: `clamp(17px, 6vw, 54px)`,
    color: layoutStyles.secandryFontColor,
    fontFamily: layoutStyles.secandryFontFamily,
}


const aELogo ={
    position:"absolute", right: {
            xs: "35%",
            sm: "30%",
            md: "35%",
            lg: "-2%",
            xl: "-16.1%"
    },bottom:"0", top:"0", height: {
        xs: "68rem",
        sm: "85rem",
        md: "89rem",
        lg: "66rem",
        xl: "66rem",
    }, width:{
        xs: "35%",
        sm: "38%",
        md: "32%",
        lg: "38%",
        xl: "53%",
    }, 
    color: layoutStyles.lightMainColor,
    strokeWidth: "0.3%",
    strokeDashoffset: "0",
    strokeDasharray: "0",
    animation: `dashNeon 5s ease-in-out infinite alternate`,
    "@keyframes dashNeon": {
        "0%": {
            stroke: layoutStyles.paperColor,
            color: layoutStyles.lightMainColor,
        },
        "100%": {
            stroke: layoutStyles.secandryFontColor,
            color: layoutStyles.paperColor,
        }  
      },
}




export default function HeroSection(){

    const typer = useRef(null);

    useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: ["Front-End Developer.", "Software Engineer."],
      typeSpeed: 70,
      loop: true,
      backSpeed: 70,
      backDelay: 2000,
      autoInsertCss: true
    });
      return () => {
      typed.destroy();
        };
    }, []);

    return(
        <Grid sx={heroContainer}>
            <SvgIcon className="SvgG" sx={aELogo}>
                <AeLogo />
            </SvgIcon> 
            <Typography variant="inherit" sx={greetingStyle} >
                Hello, my name is
            </Typography>
            <Typography variant="h2" sx={heroNameStyle}>
                Ahmed Ehab.
            </Typography>
            <Typography variant="string" sx={heroTitleStyle}>
                I'm a <span ref={typer}></span>
            </Typography>
        </Grid>
    )
}
