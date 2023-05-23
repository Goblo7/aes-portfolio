import { Container, SvgIcon, Typography, Link, } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles } from "../../styles/layout.styles";
import Logo from "../../assets/logo/main-logo.assets";
import { Insta, Facebook, GitHub, Twitter, LinkedIn } from "../../assets/icons.assets";
import { useRef, } from "react";
import { useInView, } from "framer-motion";




const fooderContainer = {
      alignItems:"center", justifyContent:"center",backgroundColor: layoutStyles.paperColor, minWidth:"100%"
}


const LogoStyle = {
    display: "flex", alignItems: "center", fontSize:"3.5rem", stroke: layoutStyles.mainStrokeColor, strokeLinecap: "round", color: layoutStyles.mainStyleColor,
  }

const ContactSvg = {
    color: layoutStyles.mainFontColor, display:"flex",
    "&:hover" : {
        color: layoutStyles.mainStyleColor,
    }
}
export default function Fooder(){

    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});
  
    const fooderGrid = {
        boxSizing:"border-box",justifyContent: "center", alignItems:"center",backgroundColor: layoutStyles.paperColor, flexDirection:{xs:"column", md:"row"},
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }



    return(
        <Container sx={fooderContainer} >
            <Grid ref={ref} container sx={fooderGrid}>
                <Grid container gap={3} sx={{ flexBasis:"33.333%",justifyContent: "center", alignItems:"center" ,justifyItems:"center" , textAlign:"center",marginBottom:{xs:"1rem", lg:"0"}}} >
                    <Link href="#">
                        <SvgIcon sx={ContactSvg}>
                            <LinkedIn/>
                        </SvgIcon>
                    </Link>
                    <Link href="#">
                        <SvgIcon sx={ContactSvg}>
                            <Facebook/>
                        </SvgIcon>
                    </Link>
                    <Link href="#">
                        <SvgIcon sx={ContactSvg}>
                            <Insta/>
                        </SvgIcon>
                    </Link>
                    <Link href="#" sx={ContactSvg}>
                        <SvgIcon>
                            <Twitter/>
                        </SvgIcon>
                    </Link>
                    <Link href="#" sx={ContactSvg}>
                        <SvgIcon>
                            <GitHub/>
                        </SvgIcon>
                    </Link>
                </Grid>
                <Grid  item sx={{display: "grid", justifyContent:"center" , justifyItems:"center" , flexGrow:"1",textAlign:"center",flexBasis:"33.333%",}}>
                    <SvgIcon sx={LogoStyle} >
                        <Logo />
                    </SvgIcon>
                    <Typography variant="subtitle1" sx={{color: layoutStyles.secandryFontColor, fontWeight:"500", fontFamily:layoutStyles.secandryFontFamily}}>
                        Build & Designed by me
                    </Typography>
                </Grid >
                <Grid sx={{flexGrow:"1",justifyContent: "center", alignItems:"center", justifyItems:"center", textAlign:"center",flexBasis:"33.333%",marginTop:{xs: "0.3rem", lg:"0"}}} item>
                        <Typography variant="subtitle2" sx={{color: layoutStyles.mainFontColor, display:"block", }}>
                            Ahmed.ehab632@outlook.com
                        </Typography>
                    <Typography variant="caption" sx={{color: layoutStyles.secandryFontColor, display:"block" }}>
                    Copyright © 2023. All rights are reserved
                    </Typography>
                </Grid> 
            </Grid>
        </Container>
    )
}