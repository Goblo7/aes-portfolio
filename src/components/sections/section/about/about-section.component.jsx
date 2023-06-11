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
import { layoutStyles } from "../../../../styles/layout.styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import techData from "../../../../data/tech.data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../sections-wrapper.component";
// start styles

const aboutContianer = {
  margin: "0 auto 5rem",
  paddingTop: "10rem",
  maxWidth: "68rem",
};
const headerSectionStyle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  margin: "7px 0px 25px",
  fontSize: `clamp(30px,5vw,35px)`,
  whiteSpace: "nowrap",
  fontFamily: layoutStyles.mainFontFamily,
  color: layoutStyles.mainStyleColor,
  fontWeight: "669",
  "&:after": {
    content: `""`,
    display: "inline",
    top: "5px",
    width: {
      xs: "5.2rem",
      sm: "23rem",
      md: "40rem",
      lg: "53rem",
    },
    height: "1px",
    marginLeft: "20px",
    backgroundColor: layoutStyles.lineMainColor,
  },
};

const aboutTitleContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const heroPfpStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  border: `3px solid ${layoutStyles.lineMainColor}`,
  borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
  borderWidth: "6px",
  position: "relative",
  transition: "all 1s ease-in-out",
  animation: `gobloPfp 8s ease-in-out infinite`,
  maxWidth: { sm: "100%", xs: "68%" },
  "@keyframes gobloPfp": {
    "0%": {
      borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
    },
    "50%": {
      borderRadius: "5% 30% 50% 10% / 20% 30% 5% 30%",
    },
    "100%": {
      borderRadius: "30% 10% 5% 40% / 30% 5% 40% 10%",
    },
  },
};

const skillsContainer = {
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  boxShadow: { xs: "none", sm: "0 10px 30px -15px rgba(2,12,27,0.9)" },
  marginTop: "2rem",
  padding: "15px",
  borderRadius: "1.7rem",
  backgroundColor: { xs: "none", sm: layoutStyles.lightPaperColor },
};

const tecContainer = {
  width: "100%",
  display: "grid",
  justifyItems: "center",
};

const skillTitle = {
  textAlign: "center",
  color: layoutStyles.mainFontColor,
  fontFamily: layoutStyles.secandryFontFamily,
  fontSize: `clamp(25px,5vw,30px)`,
};

const skillTools = {
  gridTemplateColumns: `repeat (2 ,1fr)`,
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center",
};

const languagesAndDevTitle = {
  textAlign: "center",
  marginTop: "1rem",
  fontFamily: layoutStyles.secandryFontFamily,
  color: layoutStyles.mainFontColor,
  fontSize: `clamp(20px,5vw,23px)`,
  "&:after": {
    content: `""`,
    display: "block",
    width: "4rem",
    height: "0.3rem",
    margin: "auto",
    marginTop: "0.3rem",
    backgroundColor: layoutStyles.lineMainColor,
  },
};

const verticalDivider = {
  borderWidth: "0px 4px 0px 0px",
  borderStyle: "solid",
  alignSelf: "stretch",
  borderColor: layoutStyles.lineMainColor,
  right: "50%",
  left: "50%",
  margin: "20px 0px 0px;",
};

const heroPfpContainer = {
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  flexGrow: 1,
  width: "10%",
};

const DevAndlangListContianer = {
  display: "grid",
  gridTemplateColumns: `repeat(2, 1fr)`,
};

const pinLocationIconStyles = {
  marginLeft: "0.5rem",
  color: layoutStyles.mainStyleColor,
};

// end styles

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
    <SectionWrapper className={aboutContianer}>
      <Box sx={aboutTitleContainer}>
        <Typography variant="h2" sx={headerSectionStyle}>
          About Me
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid sm={8}>
          <Typography ref={header} variant="h5" sx={aboutHeaderStyles}>
            Hi there! Nice to meet you, I'm a dedicated Front-end Developer
            based in Cairo, Egypt.
            <LocationOnOutlinedIcon sx={pinLocationIconStyles} />
          </Typography>
          <Typography ref={Para} variant="p" sx={aboutMeDiscripStyles}>
            I am a self-learner, self-motivated, diligent and persevering Junior
            Front-End Developer, I'm perpetually working on improving and
            educating myself to achieve efficacy and effectiveness in whatever i
            craft, I possese the ability to analyze, gather informations and
            identify key resources to execute an effective plan to produce
            outstanding web applications.
          </Typography>
          <Box sx={tecContainer}>
            <Grid ref={langTool} sx={skillsContainer}>
              <Typography variant="h4" sx={skillTitle}>
                &lt;TechStack/&gt;
              </Typography>
              <Grid container sx={skillTools}>
                <Grid>
                  <Typography variant="h5" sx={languagesAndDevTitle}>
                    Languages
                  </Typography>
                  <List sx={DevAndlangListContianer}>{TechLanguges}</List>
                </Grid>
                {isSamll && <Divider sx={verticalDivider} />}
                <Grid>
                  <Typography variant="h5" sx={languagesAndDevTitle}>
                    Dev Tools
                  </Typography>
                  <List sx={DevAndlangListContianer}>{TechDevTools}</List>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={heroPfpContainer}>
          <Box component="img" src={HeroPfp} alt="" sx={heroPfpStyle} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
