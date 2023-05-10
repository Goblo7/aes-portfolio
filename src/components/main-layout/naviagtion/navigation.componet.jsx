import SectionIdEnum from "../../../scripts/section-id"
import { Button, Hidden, IconButton, Stack, SwipeableDrawer, AppBar, Toolbar, useMediaQuery, useTheme} from "@mui/material"
import ChevronRightIcon  from "@mui/icons-material/ChevronRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import layoutStyles from "../../../styles/layout/main-layout.styles";

const naviagtionItems = [
    {
        text: "About",
        to: SectionIdEnum.about,
    },
    {
        text: "Portfolio",
        to: SectionIdEnum.portofilo,
    },
    {
        text: "Contact",
        to: SectionIdEnum.contacts,
    },
]

const resumeItems = [
    {
        text: "Resume",
        to: SectionIdEnum.resume,
    },
]



export default function Navigation(){

    const theme = useTheme();
    const isSamll = useMediaQuery(theme.breakpoints.down("sm"));



    const buttonStyleHover = {
        color:layoutStyles.mainFontColor,
        transition: "all .2s ease-in-out;" ,
        "&:hover":{
            transform: `scale(1.1)`,
            color: layoutStyles.mainStyleColor,
        }
    }

    const naviagtionItem = naviagtionItems.map(({text, to}) => {
        return (
            <Button key={to} href={`#${to}`} sx={buttonStyleHover} fullWidth={isSamll} onClick={navDrawerTouggle}>
                {text}
            </Button>
        )
    })
    
    const buttonSpecialStyleHover = {
        color: layoutStyles.mainStyleColor,
        transition: "all .2s ease-in-out;" ,
        "&:hover":{
            transform: `scale(1.1)`,
        }
    }
    
        
    const resumeItem = resumeItems.map(({text, to}) => {
        return (
            <Button key={to} href={`#${to}`} variant="outlined" color="inherit" sx={buttonSpecialStyleHover}>
                    {text}
            </Button>
    
        )
    })
    


    const [navDrawer, setNavDrawer] = useState(false);
    function navDrawerTouggle () {
        setNavDrawer(prevNabDrawer => !prevNabDrawer)
    }

    return(
        <>
            <Hidden smDown>
               <Stack direction="row" spacing={2} marginTop="0.5rem" >
                    {naviagtionItem}
                    {resumeItem}
                </Stack> 
            </Hidden>
            <Hidden smUp >
                <IconButton onClick={navDrawerTouggle}>
                    <MenuOpenIcon sx={{color: layoutStyles.mainStyleColor,
                            fontSize: "180%"}}/>
                </IconButton>
                <SwipeableDrawer PaperProps={{
                    sx: {width: "75%", backgroundColor: layoutStyles.lightMainColor, backgroundImage: "none"}
                }}
                anchor="right" open={navDrawer}
                 onClose={navDrawerTouggle} onOpen={navDrawerTouggle} variant="temporary">
                    <AppBar position="static"  elevation={0} sx={{
                        background: "none",
                    }}>
                        <Toolbar>    
                            <ChevronRightIcon onClick={navDrawerTouggle} sx={{color: layoutStyles.mainStyleColor,
                            fontSize: "250%"}}/>
                        </Toolbar>
                    </AppBar>
                    <Stack direction="column" spacing={7} width="100%" alignItems="center" >
                        {naviagtionItem}
                        {resumeItem}
                    </Stack>
                 </SwipeableDrawer>
            </Hidden>
        </>
    )
}