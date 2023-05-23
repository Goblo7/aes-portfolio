import { Typography, ImageListItem, Box, ListItem, ListItemIcon, ListItemText, List, Divider, Hidden } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import HeroPfp from "../../assets/pfp/main-hero-pfp.assets.jpg";
import {layoutStyles, headerSectionStyle} from "../../styles/layout.styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {techLanguges ,techDevTools} from "../../scripts/tech.scripts";
import { useInView, } from "framer-motion";
import { useRef } from "react";




const heroPfpStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    border: `3px solid ${layoutStyles.lineMainColor}`,
    borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
    position: "relative",
    transition: "all 1s ease-in-out",
    animation: `gobloPfp 8s ease-in-out infinite`,
    "@keyframes gobloPfp": {
        "0%": {
          borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
        },
        "50%": {
          borderRadius: "5% 30% 50% 10% / 20% 30% 5% 30%",
        },
        "100%": {
          borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
        }
      },
}

const skillsContainer = {
    display: "grid", alignItems:"center", justifyItems:"center" ,alignContent:"center", justifyContent:"center", boxSizing:"border-box", boxShadow: {xs: "none", sm: "0 10px 30px -15px rgba(2,12,27,0.9)"}, marginTop:"2rem", padding:"15px",borderRadius:"1.7rem",backgroundColor:{xs:"none", sm: layoutStyles.lightPaperColor}
}

const skillTitle = { 
    textAlign: "center",
    color: layoutStyles.mainFontColor,
    fontFamily: layoutStyles.secandryFontFamily,

}

const skillTools = {
    gridTemplateColumns: `repeat (2 ,1fr)`,  alignContent:"center" ,justifyContent:"center" ,alignItems:"center", justifyItems:"center",
}

const languagesAndDevTitle = { textAlign: "center" ,marginTop: "1rem",
fontFamily: layoutStyles.secandryFontFamily,
color: layoutStyles.mainFontColor,
"&:after":{
    content: `""`,
    display: "block",
    width: "4rem",
    height: "0.3rem",
    margin:"auto",
    marginTop: "0.3rem",
    backgroundColor: layoutStyles.lineMainColor,
    }
}


const horizontalDivider = {
    borderWidth: "0px 4px 0px 0px", borderStyle: "solid", alignSelf: "stretch" , borderColor: layoutStyles.lineMainColor , right:"50%", left: "50%", margin: "20px 0px 0px;"
}

const heroPfpContainer = {
     display: "grid", alignItems:"center", justifyContent:"center", flexGrow: 1,width: "10%", 
}







export default function AboutSection(){

    const langTool= useRef(null);
    const header = useRef(null)
    const Para = useRef(null)
    const isInViewLagTool = useInView(langTool, {once: true});
    const isInViewHeader = useInView(header, {once: true});
    const isInViewPara = useInView(Para, {once: true});


    const techLangugesAndSkillsStyle = [
        {
            maxHeight: "60%",
            transform: isInViewLagTool ? "none" : "translateX(-30px)",
            opacity: isInViewLagTool ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)1s"
        },
        {
            color: layoutStyles.mainFontColor,
            transform: isInViewLagTool ? "none" : "translateX(30px)",
            opacity: isInViewLagTool ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)1s"
        }
    ]
    

    const TechLanguges = techLanguges.map(({langugeName,langugeLogo}) => {
        return(
            <ListItem  key={langugeName} >
                <ListItemIcon sx={techLangugesAndSkillsStyle[0]}>
                    {langugeLogo}
                </ListItemIcon>
                <ListItemText sx={techLangugesAndSkillsStyle[1]}
                primary={langugeName}/>
            </ListItem>
        )
    })
    
    const TechDevTools = techDevTools.map(({devToolName, devToolLogo}) => {
        return(
            <ListItem key={devToolName}>
                <ListItemIcon  sx={techLangugesAndSkillsStyle[0]}>
                    {devToolLogo}
                </ListItemIcon>
                <ListItemText sx={techLangugesAndSkillsStyle[1]}
                primary={devToolName}/>
            </ListItem>
        )
    })
    





    return(
        <Grid  margin="0 auto" paddingTop="7rem" container  maxWidth="68rem">
            <Box display="flex" alignItems="center" justifyContent="center" >
                <Typography variant="h2" sx={headerSectionStyle} >About Me
                </Typography>
            </Box>
            <Grid container spacing={2}  >
                <Grid item sm={8}>
                    <Typography ref={header} variant="h5" sx={{ 
                    fontFamily: layoutStyles.mainFontFamily,
                    color: layoutStyles.mainFontColor,
                    fontWeight: "500", marginBottom: "1.5rem",fontSize:`clamp(19px,5vw, 35px)`,  transform: isInViewHeader ? "none" : "translateY(30px)",
                    opacity: isInViewHeader ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s"
                    }}>
                        Hi there! Nice to meet you, I'm a dedicated Front-end Developer based in Cairo, Egypt.
                        < LocationOnOutlinedIcon sx={{marginLeft: "0.5rem", color: layoutStyles.mainStyleColor}}/>
                    </Typography>
                    <Typography ref={Para} variant="p" color={layoutStyles.secandryFontColor}  sx={{
                    transform: isInViewPara ? "none" : "translateY(50px)",
                   opacity: isInViewPara ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)0.7s"
                    }}>
                        I am a self-learner, self-motivated, diligent and persevering Junior Front-End Developer, I'm perpetually working on improving and educating myself to achieve efficacy and effectiveness in whatever i craft, I possese the ability to analyze, gather informations and identify key resources to execute an effective plan to produce outstanding web applications.
                    </Typography>
                    <Box width="100%" display="grid" justifyItems="center">
                        <Grid ref={langTool} sx={skillsContainer} >
                                <Typography variant="h4" sx={skillTitle}>
                                    &lt;TechStack/&gt;
                                </Typography>
                                <Grid container sx={skillTools}  >
                                    <Grid item>
                                        <Typography  variant="h5"  sx={languagesAndDevTitle} >
                                            Languages
                                        </Typography>
                                            <List sx={{display: "grid", gridTemplateColumns: `repeat(2, 1fr)`,}} >
                                                {TechLanguges}
                                            </List>
                                    </Grid>
                                    <Hidden lgDown>
                                    <Divider sx={horizontalDivider} />
                                    </Hidden>
                                    <Grid item>
                                        <Typography variant="h5" textAlign="center" sx={languagesAndDevTitle}>
                                            Dev Tools
                                        </Typography>
                                        <List sx={{display: "grid", gridTemplateColumns: `repeat(2, 1fr)`, }} >
                                                {TechDevTools}
                                            </List>
                                    </Grid>
                                </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item sx={heroPfpContainer} >
                    <ImageListItem sx={heroPfpStyle}>
                            <img src={HeroPfp} alt="" style={heroPfpStyle}/>
                    </ImageListItem>
                </Grid>
            </Grid>
        </Grid>

    )
}