import { AppBar, Link, Toolbar, SvgIcon } from "@mui/material";
import Navigation from "./Naviagtion/Navigation.component";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { layoutStyles } from "../../styles/layout.styles";
import styles from "./Header.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MainLogo } from "../../scripts/icons.script";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window && window(),
  });

  return (
    <Slide
      style={{ position: "fixed" }}
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
}

// start styles

const LogoStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "0.5rem",
  fontSize: "420%",
  strokeLinecap: "round",
};

const linkLogoStyles = {
  textDecoration: "none",
  color: layoutStyles.mainStyleColor,
  cursor: "pointer",
};

// end styles

export const Header = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headerContianerstyles = {
    transform: isInView ? "none" : "translateY(-75px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };

  const onSetScroll = (arg) => {
    props.onChange(arg);
  };

  const fucn = () => {
    setTimeout(() => {
      props.onChange("hero");
    }, 3);
    props.onChange("about");
  };

  return (
    <header>
      <HideOnScroll>
        <AppBar ref={ref} elevation={0} sx={headerContianerstyles}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link onClick={fucn} className={styles.logo} sx={linkLogoStyles}>
              <SvgIcon sx={LogoStyle}>
                <MainLogo
                  ae={styles.AE}
                  border={styles.border}
                  subBorder={styles.borderDiffColor}
                />
              </SvgIcon>
            </Link>
            <Navigation onScroll={onSetScroll} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default Header;
