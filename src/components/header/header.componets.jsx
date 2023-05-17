import { AppBar, Link, Toolbar, SvgIcon, } from "@mui/material";
import Navigation from "./naviagtion/navigation-header.componet";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Logo from "../../assets/logo/main-logo.assets";
import layoutStyles from "../../styles/layout/main-layout.styles";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger} >
        {children}
      </Slide>
    );
  }


const LogoStyle = {
    display: "flex", alignItems: "center",marginTop: "0.5rem", fontSize: "420%", stroke: layoutStyles.mainStrokeColor, strokeLinecap: "round", cursor: "pointer",transition: "all .2s ease-in-out;" ,"&:hover":{
        transform: `scale(1.1)`
    }
  }

export const Header = ({
    props: Props,
}) => {
    return(
        <HideOnScroll {...Props}>
            <AppBar position="fixed" elevation={0}>
                <Toolbar  sx={{justifyContent: "space-between", }}>
                    <Link href="#" sx={{
                    textDecoration: "none", color: layoutStyles.mainStyleColor}} >
                        <SvgIcon sx={LogoStyle}>
                            <Logo/>
                        </SvgIcon>
                    </Link>
                    <Navigation />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header