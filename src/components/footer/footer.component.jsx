import { Container, SvgIcon, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles, footerStyles } from "../../scripts/styles.script";
import { MainLogo } from "../../scripts/icons.script";
import { useRef } from "react";
import { useInView } from "framer-motion";
import contactsFooter from "../../data/contacts-footer.data";

const contactsIcons = contactsFooter.map((contactIcon) => {
  return (
    <Link key={contactIcon.id} href={contactIcon.link} target="_blank">
      <SvgIcon sx={footerStyles.ContactSvg}>{contactIcon.components}</SvgIcon>
    </Link>
  );
});

const Footer = () => {
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
      <Container sx={footerStyles.footerContainer}>
        <Grid ref={ref} container sx={footerGrid}>
          <Grid container gap={3} sx={footerStyles.contactSvgContainer}>
            {contactsIcons}
          </Grid>
          <Grid sx={footerStyles.tradeMarkLogoStyle}>
            <SvgIcon sx={footerStyles.LogoStyle}>
              <MainLogo />
            </SvgIcon>
            <Typography
              variant="subtitle1"
              sx={footerStyles.tradeMarkDescrpitonStyle}
            >
              Designed & Built by me
            </Typography>
          </Grid>
          <Grid sx={footerStyles.copyrightsContainer}>
            <Typography variant="subtitle2" sx={footerStyles.copyrightsEmail}>
              ahmedehab.sg@gmail.com
            </Typography>
            <Typography variant="caption" sx={footerStyles.copyRights}>
              Copyright © 2023. All rights are reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
