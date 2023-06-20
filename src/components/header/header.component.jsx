import { AppBar, Link, Toolbar, SvgIcon } from "@mui/material";
import Navigation from "./Naviagtion/Navigation.component";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { headerStyles } from "../../scripts/styles.script";
import styles from "../../styles/header-styles/header.module.css";
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

export const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headerContianerstyles = {
    transform: isInView ? "none" : "translateY(-75px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };

  const bookBtn = () => {
    document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <HideOnScroll>
        <AppBar ref={ref} elevation={0} sx={headerContianerstyles}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link
              onClick={bookBtn}
              className={styles.logo}
              sx={headerStyles.linkLogoStyles}
            >
              <SvgIcon sx={headerStyles.LogoStyle}>
                <MainLogo
                  ae={styles.AE}
                  border={styles.border}
                  subBorder={styles.borderDiffColor}
                />
              </SvgIcon>
            </Link>
            <Navigation />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default Header;
