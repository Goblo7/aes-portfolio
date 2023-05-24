import { Button, SvgIcon, Typography,} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {Dish, Satellite} from "../../assets/icons.assets"
import { layoutStyles } from "../../styles/layout.styles";
import "./contact-styles.section.css";
import { useRef, } from "react";
import { useInView, } from "framer-motion";


const contactTitle = {
    display: "flex", 
    alignItems: "center",
    position: "relative",
    margin: "0 auto 25px",
    fontSize: `clamp(30px,5vw,35px)`,
    whiteSpace: "nowrap",
    color: layoutStyles.mainStyleColor,
    fontWeight: "669",
}

const contactDescriptionHeader = { 
    fontFamily: layoutStyles.secandryFontFamily,color: layoutStyles.mainFontColor, fontWeight: "500", fontSize:`clamp(19px,5vw, 35px)`,marginBottom: "1rem",
}

const ButtonStyles = { 
    width:{md:"11rem", sm:"10rem", xs:"9rem"}, marginTop:"3rem", padding:"1rem 1rem",background:layoutStyles.paperColor, color:layoutStyles.mainStyleColor, fontSize:"1.1rem",position: "relative",borderRadius:"1rem",
}

const contact ="mailto:ahmed.ehab632@outlook.com";

export default function ContactSection(){



    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});



    const satelliteStyles = {  
        width:{lg:"5.5rem", md:"5rem", sm:"4.5rem", xs:"3rem"}, height:"100%",
        animation:  {xl:"xlMovingSatellite 90s ease-in-out infinite 0s", 
        md:"mdMovingSatellite 90s ease-in-out infinite 0s", 
        sm:"smMovingSatellite 90s ease-in-out infinite 0s",
        xs: "xsMovingSatellite 90s ease-in-out infinite 0s"},
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        "@keyframes xlMovingSatellite": {
            "0%":{
                transform: `translateX(0%) rotateZ(45deg)`     
            },
            "30%":{
                transform: `translateX(700%) rotateZ(90deg)`
            },
           " 70%":{
                transform: `translateX(-700%) rotateZ(0deg)`
            },
            "100%":{
                transform: `translateX(0%) rotateZ(45deg)`
            },
        },
        "@keyframes mdMovingSatellite": {
            "0%":{
                transform: `translateX(0%) rotateZ(45deg)`     
            },
            "30%":{
                transform: `translateX(500%) rotateZ(90deg)`
            },
           " 70%":{
                transform: `translateX(-500%) rotateZ(0deg)`
            },
            "100%":{
                transform: `translateX(0%) rotateZ(45deg)`
            },
        },
        "@keyframes smMovingSatellite": {
            "0%":{
                transform: `translateX(0%) rotateZ(45deg)`     
            },
            "30%":{
                transform: `translateX(360%) rotateZ(90deg)`
            },
           " 70%":{
                transform: `translateX(-360%) rotateZ(0deg)`
            },
            "100%":{
                transform: `translateX(0%) rotateZ(45deg)`
            },
        },
        "@keyframes xsMovingSatellite": {
            "0%":{
                transform: `translateX(0%) rotateZ(45deg)`     
            },
            "30%":{
                transform: `translateX(230%) rotateZ(90deg)`
            },
           " 70%":{
                transform: `translateX(-230%) rotateZ(0deg)`
            },
            "100%":{
                transform: `translateX(0%) rotateZ(45deg)`
            },
        }, 

    }


    const dishStyle = {
        fontSize:{lg:"5rem", sm:"4rem", xs:"3rem"}, color: layoutStyles.mainStyleColor, opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s", 
    }
    



    return(
          <Grid container sx={{display:"grid", height: "90dvh", width: "100%", justifyItems:"center", alignItems:"center", textAlign:"center"}}>
                <Grid paddingBottom="1rem">
                <SvgIcon ref={ref} id="satellite" sx={satelliteStyles}> 
                    <Satellite   />
                </SvgIcon>
                </Grid>
                <Grid item display="grid" sm={8} sx={{ justifyItems:"center",paddingBottom:"3rem"}} > 
                    <Typography variant="h2" sx={contactTitle}>
                        Contact Me
                    </Typography>
                    <Typography variant="h5" sx={contactDescriptionHeader}>
                    Please Don't Hesitate To Reach Out
                    </Typography>
                    <Typography variant="p" sx={{color: layoutStyles.secandryFontColor, fontSize: `clamp(15px, 4vw, 18px)`}}>
                        It is always a most delightful moment for me when meeting new people, Every great network starts with a simple Hello.
                    </Typography>
                    <Button id="contact-button" href={contact} disableElevation sx={ButtonStyles}>
                        Say Hello
                    </Button>
                </Grid>
               <Grid>
                <SvgIcon id="dish" ref={ref} sx={dishStyle}> 
                    <Dish />
                </SvgIcon>
                </Grid> 
            </Grid>
    )
}