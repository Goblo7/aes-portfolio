import {
  List,
  SvgIcon,
  Typography,
  ListItemText,
  ImageListItem,
  Box,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles } from "../../../../../styles/layout.styles";
import { restaurant } from "../../../../../assets/img";
import { ExternalLink, GitHub } from "../../../../../assets/icons.assets";
import projectsData from "../../../../../scripts/projects-data/projects-data.script";

/* styles start*/

const projectContainerStyles = {
  boxSizing: "border-box",
  boxShadow: "0 10px 30px -15px rgba(2,12,27,0.9)",
  backgroundColor: "#14233d",
  marginTop: "3rem",
  padding: "15px",
  width: "95%",
  margin: "3rem auto",
  borderRadius: "1.7rem",
};

const projectContainerDirectionsEven = {
  display: "flex",
  overflow: "hidden",
  flexDirection: { lg: "row", xs: "column" },
};

const projectContainerDirectionsOdd = {
  display: "flex",
  overflow: "hidden",
  flexDirection: { lg: "row-reverse", xs: "column" },
};

const projectImgContainerBackground = {
  overflow: "hidden",
  borderRadius: "1rem",
  boxShadow: "0 10px 40px -15px rgba(2,12,27,0.9)",
  maxHeight: { xs: "15rem", sm: "24rem" },
  background: `radial-gradient(circle, rgba(0,99,255,1) 0%, rgba(18,8,126,1) 50%, rgba(20,6,56,1) 100%)`,
  flex: "1 0 60%",
};

const projectImgStyles = {
  height: "100%",
  width: "100%",
  transition: `transform 10s ,filter 0.8s , WebkitFilter 0.8s, opacity 1s ease-in-out 0s`,
  overflow: "hidden",
  filter: "gray",
  opacity: "0.5",
  WebkitFilter: `grayscale(1)`,
  "&:hover": {
    transform: { xs: `translateY(-56%)`, sm: `translateY(-70.9%)` },
    filter: "none",
    WebkitFilter: `grayscale(0)`,
    opacity: "1",
  },
};

const projectDescriptionContainer = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  margin: "1rem",
  justifyContent: "space-evenly",
  paddingInline: "1rem",
  flex: "1 0 40%",
};

const projectDescriptionHeader = {
  color: layoutStyles.mainFontColor,
  textTransform: "uppercase",
  marginBottom: "1rem",
  fontSize: `clamp(19px, 5vw, 24px)`,
};

const projectDescription = {
  color: layoutStyles.secandryFontColor,
  fontSize: `clamp(15px, 4vw, 18px)`,
};

const projectDescriptionUsedToolsContainer = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "4%",
  paddingInline: "10%",
};

const projectDescriptionToolsItems = {
  color: layoutStyles.mainFontColor,
  fontFamily: layoutStyles.secandryFontFamily,
};

const projectIconsContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "6%",
};

const projectIconStyles = {
  color: layoutStyles.secandryFontColor,
  "&:hover": {
    color: layoutStyles.mainStyleColor,
  },
};

/* styles end*/

const projectElement = [];
for (let i = 0; i < projectsData.length; i += 1) {
  if (i % 2 === 0) {
    projectElement.push(
      <Grid item sx={projectContainerStyles}>
        <Grid item sx={projectContainerDirectionsEven}>
          <Grid item sx={projectImgContainerBackground}>
            <Link href={projectsData[i].liveLink}>
              <ImageListItem sx={projectImgStyles}>
                <img src={restaurant} alt="" />
              </ImageListItem>
            </Link>
          </Grid>

          <Grid item sx={projectDescriptionContainer}>
            <Typography variant="h6" sx={projectDescriptionHeader}>
              {projectsData[i].title}
            </Typography>
            <Box>
              <Typography variant="p" sx={projectDescription}>
                {projectsData[i].description}
              </Typography>
            </Box>
            <List sx={projectDescriptionUsedToolsContainer}>
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[i].tools[0]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[i].tools[1]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[i].tools[2]}
              />
            </List>
            <Box sx={projectIconsContainer}>
              <Link href={projectsData[i].codeLink} target="_blank">
                <SvgIcon sx={projectIconStyles}>
                  <GitHub />
                </SvgIcon>
              </Link>
              <Link href={projectsData[i].liveLink}>
                <SvgIcon sx={projectIconStyles}>
                  <ExternalLink />
                </SvgIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    projectElement.push(
      <Grid item sx={projectContainerStyles}>
        <Grid item sx={projectContainerDirectionsOdd}>
          <Grid item sx={projectImgContainerBackground}>
            <Link href={projectsData[i].liveLink}>
              <ImageListItem sx={projectImgStyles}>
                <img src={restaurant} alt="" />
              </ImageListItem>
            </Link>
          </Grid>

          <Grid item sx={projectDescriptionContainer}>
            <Typography variant="h6" sx={projectDescriptionHeader}>
              {projectsData[i].title}
            </Typography>
            <Box>
              <Typography variant="p" sx={projectDescription}>
                {projectsData[i].description}
              </Typography>
            </Box>
            <List sx={projectDescriptionUsedToolsContainer}>
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[i].tools[0]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[i].tools[1]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[i].tools[2]}
              />
            </List>
            <Box sx={projectIconsContainer}>
              <Link href={projectsData[i].codeLink} target="_blank">
                <SvgIcon sx={projectIconStyles}>
                  <GitHub />
                </SvgIcon>
              </Link>
              <Link target="_blank" href={projectsData[i].liveLink}>
                <SvgIcon sx={projectIconStyles}>
                  <ExternalLink />
                </SvgIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const Project = () => {
  return [projectElement];
};

export default Project;
