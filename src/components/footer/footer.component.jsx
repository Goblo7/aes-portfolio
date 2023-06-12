import { Container, SvgIcon, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles } from "../../styles/layout.styles";
import { MainLogo } from "../../scripts/icons.script";
import { useRef } from "react";
import { useInView } from "framer-motion";
import contactsFooter from "../../data/contacts-footer.data";

//start styles

const footerContainer = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: layoutStyles.paperColor,
  minWidth: "100%",
  marginTop: "3vh",
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
  fontSize: {
    sm: "1.4rem",
    xs: "1.2rem",
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

const contactsIcons = contactsFooter.map((contactIcon) => {
  return (
    <Link key={contactIcon.id} href={contactIcon.link} target="_blank">
      <SvgIcon sx={ContactSvg}>{contactIcon.components}</SvgIcon>
    </Link>
  );
});

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //start styles

  const footerGrid = {
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
    <footer>
      <Container sx={footerContainer}>
        <Grid ref={ref} container sx={footerGrid}>
          <Grid container gap={3} sx={contactSvgContainer}>
            {contactsIcons}
          </Grid>
          <Grid sx={tradeMarkLogoStyle}>
            <SvgIcon sx={LogoStyle}>
              <MainLogo />
            </SvgIcon>
            <Typography variant="subtitle1" sx={tradeMarkDescrpitonStyle}>
              Designed & Build by me
            </Typography>
          </Grid>
          <Grid sx={copyrightsContainer}>
            <Typography variant="subtitle2" sx={copyrightsEmail}>
              ahmedehab.sg@gmail.com
            </Typography>
            <Typography variant="caption" sx={copyRights}>
              Copyright © 2023. All rights are reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
