import { Grid, Typography, Box} from "@mui/material"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import layoutStyles from "../../styles/layout/main-layout.styles";
 
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
        <Grid sx={{ paddingTop: "16rem"}}>
             <Typography variant="inherit" sx={{
                lineHeight: "1.1",
                fontSize: "1.1rem", 
                fontFamily: layoutStyles.secandryFontFamily,
                color: layoutStyles.mainStyleColor
            }} >
                Hello, my name is
            </Typography>
            <Typography variant="h2" 
                sx={{
                    fontWeight: 600,
                    fontSize: `clamp(40px, 8vw, 80px)`,
                    margin: "0",
                    color: layoutStyles.mainFontColor,
                    fontFamily: layoutStyles.mainFontFamily,
                }}
            >
                Ahmed Ehab.
            </Typography>
            <Typography variant="string" sx={{
                fontSize: `clamp(20px, 6vw, 55px)`,
                color: layoutStyles.secandryFontColor,
                fontFamily: layoutStyles.secandryFontFamily,
            }}>
                I'm a <Box ref={typer} sx={{
                    display: "inline-block",
            }}></Box>
            </Typography>
        </Grid>
    )
}
