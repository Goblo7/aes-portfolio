import { AppBar, Link, Toolbar, SvgIcon } from "@mui/material";
import Navigation from "./naviagtion/navigation-header.componet";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Logo from "../../assets/logo/main-logo.assets";
import layoutStyles from "../../styles/layout/main-layout.styles";
import "./header-styles.componets.css";
import { useRef, } from "react";
import { useInView, } from "framer-motion";


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide style={{position:"fixed"}} appear={false} direction="down" in={!trigger} >
        {children}
      </Slide>
    );
  }


const LogoStyle = {
    display: "flex", alignItems: "center",marginTop: "0.5rem", fontSize: "420%", strokeLinecap: "round",
}

export const Header = ({
    props: Props,
}) => {

    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});


    return(
        <HideOnScroll {...Props}>
            <AppBar ref={ref} elevation={0} sx={{
                 transform: isInView ? "none" : "translateY(-75px)",
                 opacity: isInView ? 1 : 0,
                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}>
                <Toolbar sx={{justifyContent: "space-between", }}>
                        <Link id="logo" href="#" sx={{
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