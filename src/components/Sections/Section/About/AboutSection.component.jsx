import {
  Typography,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HeroPfp from "../../../../assets/pfp/main-hero-pfp.assets.jpg";
import { layoutStyles, aboutStyles } from "../../../../scripts/styles.script";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import techData from "../../../../data/tech.data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../SectionWrapper.component";

export default function AboutSection() {
  const theme = useTheme();
  const isSamll = useMediaQuery(theme.breakpoints.up("lg"));
  const langTool = useRef(null);
  const header = useRef(null);
  const Para = useRef(null);
  const isInViewLagTool = useInView(langTool, { once: true });
  const isInViewHeader = useInView(header, { once: true });
  const isInViewPara = useInView(Para, { once: true });

  // start styles

  const aboutHeaderStyles = {
    fontFamily: layoutStyles.mainFontFamily,
    color: layoutStyles.mainFontColor,
    fontWeight: "500",
    marginBottom: "1.5rem",
    fontSize: `clamp(19px,5vw, 28px)`,
    transform: isInViewHeader ? "none" : "translateY(30px)",
    opacity: isInViewHeader ? 1 : 0,
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)0.5s",
  };

  const techLangugesAndSkillsStyle = [
    {
      maxHeight: "60%",
      transform: isInViewLagTool ? "none" : "translateX(-30px)",
      opacity: isInViewLagTool ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)1s",
    },
    {
      color: layoutStyles.mainFontColor,
      transform: isInViewLagTool ? "none" : "translateX(30px)",
      opacity: isInViewLagTool ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)1s",
    },
  ];

  const aboutMeDiscripStyles = {
    color: layoutStyles.secandryFontColor,
    transform: isInViewPara ? "none" : "translateY(50px)",
    opacity: isInViewPara ? 1 : 0,
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)0.7s",
  };

  // end styles

  const TechLanguges = techData[0].map(({ langugeName, langugeLogo }) => {
    return (
      <ListItem key={langugeName}>
        <ListItemIcon sx={techLangugesAndSkillsStyle[0]}>
          {langugeLogo}
        </ListItemIcon>
        <ListItemText
          sx={techLangugesAndSkillsStyle[1]}
          primary={langugeName}
        />
      </ListItem>
    );
  });

  const TechDevTools = techData[1].map(({ devToolName, devToolLogo }) => {
    return (
      <ListItem key={devToolName}>
        <ListItemIcon sx={techLangugesAndSkillsStyle[0]}>
          {devToolLogo}
        </ListItemIcon>
        <ListItemText
          sx={techLangugesAndSkillsStyle[1]}
          primary={devToolName}
        />
      </ListItem>
    );
  });

  return (
    <SectionWrapper className={aboutStyles.aboutContianer}>
      <Box sx={aboutStyles.aboutTitleContainer}>
        <Typography variant="h2" sx={aboutStyles.headerSectionStyle}>
          About Me
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid sm={8}>
          <Typography ref={header} variant="h5" sx={aboutHeaderStyles}>
            Hi there! Nice to meet you, I'm a dedicated Front-end Developer
            based in Cairo, Egypt.
            <LocationOnOutlinedIcon sx={aboutStyles.pinLocationIconStyles} />
          </Typography>
          <Typography ref={Para} variant="p" sx={aboutMeDiscripStyles}>
            I am a self-learner, self-motivated, diligent and persevering Junior
            Front-End Developer, I'm perpetually working on improving and
            educating myself to achieve efficacy and effectiveness in whatever i
            craft, I possess the ability to analyze, gather informations and
            identify key resources to execute an effective plan to produce
            outstanding web applications.
          </Typography>
          <Box sx={aboutStyles.tecContainer}>
            <Grid ref={langTool} sx={aboutStyles.skillsContainer}>
              <Typography variant="h4" sx={aboutStyles.skillTitle}>
                &lt;TechStack/&gt;
              </Typography>
              <Grid container sx={aboutStyles.skillTools}>
                <Grid>
                  <Typography
                    variant="h5"
                    sx={aboutStyles.languagesAndDevTitle}
                  >
                    Languages
                  </Typography>
                  <List sx={aboutStyles.DevAndlangListContianer}>
                    {TechLanguges}
                  </List>
                </Grid>
                {isSamll && <Divider sx={aboutStyles.verticalDivider} />}
                <Grid>
                  <Typography
                    variant="h5"
                    sx={aboutStyles.languagesAndDevTitle}
                  >
                    Dev Tools
                  </Typography>
                  <List sx={aboutStyles.DevAndlangListContianer}>
                    {TechDevTools}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={aboutStyles.heroPfpContainer}>
          <Box
            component="img"
            src={HeroPfp}
            alt=""
            sx={aboutStyles.heroPfpStyle}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
