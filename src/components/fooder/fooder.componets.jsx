import { Container, SvgIcon, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles } from "../../styles/layout.styles";
import Logo from "../../assets/logo/main-logo.assets";
import {
  Insta,
  Facebook,
  GitHub,
  Twitter,
  LinkedIn,
} from "../../assets/icons.assets";
import { useRef } from "react";
import { useInView } from "framer-motion";

//start styles

const fooderContainer = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: layoutStyles.paperColor,
  minWidth: "100%",
};

const LogoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "3.5rem",
  stroke: layoutStyles.mainStrokeColor,
  strokeLinecap: "round",
  color: layoutStyles.mainStyleColor,
};

const ContactSvg = {
  color: layoutStyles.mainFontColor,
  display: "flex",
  "&:hover": {
    color: layoutStyles.mainStyleColor,
  },
};

const contactSvgContainer = {
  flexBasis: "33.333%",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  marginBottom: { xs: "1rem", lg: "0" },
};

const tradeMarkLogoStyle = {
  display: "grid",
  justifyContent: "center",
  justifyItems: "center",
  flexGrow: "1",
  textAlign: "center",
  flexBasis: "33.333%",
};

const tradeMarkDescrpitonStyle = {
  color: layoutStyles.secandryFontColor,
  fontWeight: "500",
  fontFamily: layoutStyles.secandryFontFamily,
};

const copyrightsContainer = {
  flexGrow: "1",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  flexBasis: "33.333%",
  marginTop: { xs: "0.3rem", lg: "0" },
};

const copyrightsEmail = {
  color: layoutStyles.mainFontColor,
  display: "block",
};

const copyRights = {
  color: layoutStyles.secandryFontColor,
  display: "block",
};

// end styles

export default function Fooder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //start styles

  const fooderGrid = {
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: layoutStyles.paperColor,
    flexDirection: { xs: "column", md: "row" },
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  // end styles

  return (
    <Container sx={fooderContainer}>
      <Grid ref={ref} container sx={fooderGrid}>
        <Grid container gap={3} sx={contactSvgContainer}>
          <Link
            href="https://www.linkedin.com/in/ahmedehab632/"
            target="_blank"
          >
            <SvgIcon sx={ContactSvg}>
              <LinkedIn />
            </SvgIcon>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100007869753482"
            target="_blank"
          >
            <SvgIcon sx={ContactSvg}>
              <Facebook />
            </SvgIcon>
          </Link>
          <Link href="https://www.instagram.com/goblo.7/" target="_blank">
            <SvgIcon sx={ContactSvg}>
              <Insta />
            </SvgIcon>
          </Link>
          <Link href="https://twitter.com/EvWithin" target="_blank">
            <SvgIcon sx={ContactSvg}>
              <Twitter />
            </SvgIcon>
          </Link>
          <Link href="https://github.com/Goblo7/" target="_blank">
            <SvgIcon sx={ContactSvg}>
              <GitHub />
            </SvgIcon>
          </Link>
        </Grid>
        <Grid item sx={tradeMarkLogoStyle}>
          <SvgIcon sx={LogoStyle}>
            <Logo />
          </SvgIcon>
          <Typography variant="subtitle1" sx={tradeMarkDescrpitonStyle}>
            Build & Designed by me
          </Typography>
        </Grid>
        <Grid sx={copyrightsContainer} item>
          <Typography variant="subtitle2" sx={copyrightsEmail}>
            dev.ahmedehab@gmail.com
          </Typography>
          <Typography variant="caption" sx={copyRights}>
            Copyright © 2023. All rights are reserved
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
