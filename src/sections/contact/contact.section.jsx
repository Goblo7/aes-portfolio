import { Button, SvgIcon, Typography,} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {Antena, Satellite} from "../../assets/icons.assets"
import { layoutStyles } from "../../styles/layout.styles";
import "./contact-styles.section.css"

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
    width:"11rem", marginTop:"3rem", padding:"1rem 1rem",background:layoutStyles.paperColor, color:layoutStyles.mainStyleColor, fontSize:"1.1rem",position: "relative",borderRadius:"1rem",         
    "&:after,&:before":{
        content: `""`,
        position: "absolute",
        inset: "-0.2rem",
        borderRadius: "inherit",
        background: `radial-gradient(circle, rgba(18,8,126,1) 0%, rgba(136,136,255,1) 50%, rgba(26,6,56,1) 100%)`,
        animtation: `rotation 20s linear infinite`,
        zIndex: "-1",
    },
    "&:after":{
        filter:`blur(0.2rem)`
    },
    "&:hover":{
        background: "#14233d",
    },
    "@keyframes rotation": {
        "0%" : {
            circle: "0deg",
        },
        "100%":{
            circle: "360deg",
        }
    },
}



export default function ContactSection(){
    return(
          <Grid container sx={{display:"grid", height: "80vh", width: "100%", justifyItems:"center", alignItems:"center", textAlign:"center"}}>
                <Grid>
                <SvgIcon sx={{fontSize: "8rem", color: layoutStyles.mainStyleColor,}}> 
                    <Satellite />
                </SvgIcon>
                </Grid>
                <Grid item display="grid" sm={8} sx={{ justifyItems:"center",}} > 
                    <Typography variant="h2" sx={contactTitle}>
                        Contact Me
                    </Typography>
                    <Typography variant="h5" sx={contactDescriptionHeader}>
                    Please Don't Hesitate To Reach Out
                    </Typography>
                    <Typography variant="p" sx={{color: layoutStyles.secandryFontColor, fontSize: `clamp(15px, 4vw, 18px)`}}>
                        It is always a most delightful moment for me when meeting new people, Every great network starts with a simple Hello.
                    </Typography>
                    <Button href="" disableElevation sx={ButtonStyles}>Say Hello</Button>
                </Grid>
                <Grid>
                <SvgIcon sx={{fontSize: "15rem", color: layoutStyles.mainStyleColor,}}> 
                    <Antena />
                </SvgIcon>
                </Grid>
            </Grid>
    )
}