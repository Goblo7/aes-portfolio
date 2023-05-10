import { Typography, ImageListItem, Box, ListItem, ListItemIcon, ListItemText, List } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import HeroPfp from "../../assets/pfp/main-hero-pfp.assets.jpg";
import layoutStyles from "../../styles/layout/main-layout.styles";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FolderIcon from '@mui/icons-material/Folder';


const HeaderSectionStyle = {
    display: "flex", 
    alignItems: "center",
    position: "relative",
    margin: "7px 0px 25px",
    fontSize: `clamp(26px,5vw,35px)`,
    whiteSpace: "nowrap",
    fontFamily: layoutStyles.mainFontFamily,
    color: layoutStyles.mainStyleColor,
    fontWeight: "669",
    "&:after":{
        content: `""`,
        display: "inline",
        top: "5px",
        width: {
            xs: "11rem",
            sm: "25rem",
            md: "42rem",
            xl: "50rem"
        },
        height: "1px",
        marginLeft: "20px",
        backgroundColor: layoutStyles.lineMainColor,
    }
}


const heroPfpStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    border: `3px solid ${layoutStyles.lineMainColor}`,
    borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
    position: "relative",
    transition: "all 1s ease-in-out",
    animation: `goblo 8s ease-in-out infinite`,
    "@keyframes goblo": {
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


const center = {
    justifyContent:"center", alignContent: "center", justifyItems: "center"
}


export default function AboutSection(){
    return(
        <Grid margin="0 auto" paddingTop="10rem" container spacing={2} maxWidth="65rem">
            <Box display="flex" alignItems="center" justifyContent="center" >
                <Typography variant="h2" sx={HeaderSectionStyle} >About Me
                </Typography>
            </Box>
            <Grid container spacing={2} maxWidth="65rem" >
                <Grid item sm={8}>
                    <Typography variant="h5" sx={{ 
                    fontFamily: layoutStyles.mainFontFamily,
                    color: layoutStyles.mainFontColor,
                    fontWeight: "500", marginBottom: "1rem"
                    }}>
                        Hi there! Nice to meet you, I'm a dedicated Front-end Developer based in Cairo, Egypt
                        < LocationOnOutlinedIcon sx={{marginLeft: "0.5rem", color: layoutStyles.mainStyleColor}}/>
                    </Typography>
                    <Typography variant="p" color={layoutStyles.secandryFontColor}>
                        I am a self-learner, self-motivated, diligent and persevering Junior Front-End Developer, I'm perpetually working on improving and educating myself to achieve efficacy and effectiveness in whatever i craft, I possese the ability to gather informations and identify key resources to execute an effective plan to produce outstanding web applications.
                    </Typography>
                    <Box  width="100%" display="grid" justifyItems="center">
                        <Grid display="grid" alignItems="center" justifyItems="center" alignContent="center" justifyContent="center" boxSizing="border-box" boxShadow=" 2px 2px 15px #8892b0;" marginTop="1.5rem" maxWidth="90%" padding="20px" >
                                <Typography variant="h4" sx={{"&:after":{
                                content: `""`,
                                display: "block",
                                width: "9rem",
                                height: "0.3rem",
                                marginLeft: "20px",
                                backgroundColor: layoutStyles.lineMainColor,
                                }}}>
                                    &lt;techStack&gt;
                                </Typography>
                                <Grid container  >
                                    <Grid display="grid" sx={center} item maxWidth="50%">
                                        <Typography >
                                            Languages
                                        </Typography>
                                        <Grid container direction="column" maxWidth="250px" >
                                            <Grid container sx={center} >
                                                <Grid >
                                                    <List >
                                                        <ListItem >
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item display="grid" sx={center} direction="column" maxWidth="50%" >
                                        <Typography>
                                            Dev Tools
                                        </Typography>
                                        <Grid container direction="column" maxWidth="250px" >
                                            <Grid container sx={center} >
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid >
                                                    <List >
                                                        <ListItem>
                                                            <ListItemIcon sx={{minWidth:"35px"}}>
                                                            <FolderIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary="JS"
                                                            />
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item sx={{ display: "grid", alignItems:"center", justifyContent:"center", flexGrow: 1,width: "10%", }} >
                    <ImageListItem sx={heroPfpStyle}>
                            <img src={HeroPfp} alt="" style={heroPfpStyle}/>
                    </ImageListItem>
                </Grid>
            </Grid>
        </Grid>

    )
}