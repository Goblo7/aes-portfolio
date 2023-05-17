import { Container, SvgIcon, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles } from "../../styles/layout.styles";
import Logo from "../../assets/logo/main-logo.assets";
import { Insta, Facebook, GitHub, Twitter, LinkedIn } from "../../assets/icons.assets";
const fooderContainer = {
      height:"100%", alignItems:"center", justifyContent:"center", minHeight:"10dvh",minWidth:'100%',backgroundColor: layoutStyles.lightPaperColor,
      borderTopLeftRadius: "30%", borderTopRightRadius:"30%",
}


const LogoStyle = {
    display: "flex", alignItems: "center", fontSize:"3.7rem", stroke: layoutStyles.mainStrokeColor, strokeLinecap: "round", color: layoutStyles.mainStyleColor,
  }


const fooderGridContainer = {
    boxSizing:"border-box",justifyContent: "center", alignItems:"center",borderTopLeftRadius: "30%", borderTopRightRadius:"30%",backgroundColor: layoutStyles.lightPaperColor, minHeight:"10dvh",minWidth:'100%', height:"100%",paddingTop:"1rem", flexDirection:{xs:"column", md:"row"},
}

const ContactSvg = {
    color: layoutStyles.mainFontColor, display:"flex",
    "&:hover" : {
        color: layoutStyles.mainStyleColor,
    }
}
export default function Fooder(){
    return(
        <Container sx={fooderContainer} >
            <Grid container sx={fooderGridContainer}>
                <Grid container gap={4} sx={{ flexBasis:"33.333%",justifyContent: "center", alignItems:"center" ,justifyItems:"center" , textAlign:"center",marginBottom:{xs:"1rem", lg:"0"}}} >
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