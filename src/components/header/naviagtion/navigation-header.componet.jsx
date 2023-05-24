import SectionIdEnum from "../../../scripts/section-id"
import { Button, IconButton, Stack, SwipeableDrawer, AppBar, Toolbar, useMediaQuery, useTheme, Box} from "@mui/material"
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
        text: "Projects",
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



const heroCV = "https://public.bl.files.1drv.com/y4mNJr4qTfU0urx-oUOez0VqMw6GHrtR1wuI3iRKhA36Cfg2Su9lc7RSQmudOPAJRUCufMiGxa39aciLeURfc5rG1d4rzWr-izxdQej2SH2yiwunxwDCACq7ycAEhgoRBFAtoyzQnb5iW7hERBSyUnLhWVQdHj4DeFlY6ZPTtD2I2NUn1BQI_mIVShcyH9fXl-0WErhufmyAog3XiLSOuLGg7mGB66CQ09CFec4X1GDNGA?AVOverride=1"




export default function Navigation(){

    const theme = useTheme();
    const isSamll = useMediaQuery(theme.breakpoints.down("md"));

    const buttonStyleHover = {
        color:layoutStyles.mainFontColor,
        "&:hover":{
            color: layoutStyles.mainStyleColor,
            backgroundColor: layoutStyles.paperColor
        }, 
    }
        

    const naviagtionItem = naviagtionItems.map(({text, to}) => {
        return (
            <Button key={to} href={`#${to}`} sx={buttonStyleHover}  onClick={navDrawerTouggle}>
                {text}
            </Button>
        )
    })
    
    const buttonSpecialStyleHover = {
        color: layoutStyles.mainStyleColor,
        transition: "all .2s ease-in-out;" ,
        backgroundColor: layoutStyles.paperColor ,
        "&:hover":{
            background: "#14233d",
        },"&:after,&:before":{
            content: `""`,
            position: "absolute",
            inset: "-0.05rem",
            borderRadius: "inherit",
            background: `radial-gradient(circle, rgba(18,8,126,1) 0%, rgba(136,136,255,1) 50%, rgba(26,6,56,1) 100%)`,
            animtation: `rotation 20s linear infinite`,
            zIndex: "-1",
        },
        "&:after":{
            filter:`blur(0.2rem)`
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
    
        
 
    const resumeItem = resumeItems.map(({text, to}) => {
        return (
            <Button key={to} href={heroCV} variant="outlined" target="_blank" color="inherit" sx={buttonSpecialStyleHover}>
                    {text}
            </Button>
    
        )
    })
    
    const [navDrawer, setNavDrawer] = useState(false);
    function navDrawerTouggle () {
        setNavDrawer(prevNabDrawer => !prevNabDrawer)
    }




    return(
        <Box>
            {
                !isSamll?
                <Stack direction="row" spacing={2} marginTop="0.5rem" >
                    {naviagtionItem}
                    {resumeItem}
                </Stack> 
            :
                <>
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
                 </>
            }
        </Box>
    )
}